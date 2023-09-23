/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EditCards = ({ data, setData, task }) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(task.date);
  const [isLoading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setLoading(false);
  };

  const handleShow = () => {
    setShow(true);
    setLoading(true); // Ensure isLoading is set to false when showing.
  };

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const buttonClickHandler = () => {
    const newArray = [];
    data.forEach((card) => {
      if (card.key !== task.key) {
        newArray.push(card);
      }
    });
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    setData([{ key: task.key, title: title, body: body, date: startDate }, ...newArray]);
    handleClose(); // Close the Offcanvas modal after saving changes.
  };

  const markAsCompleteHandler = () => {
    const newArray = [];
    data.map((card) => {
      if (card.key !== task.key) {
        newArray.push(card);
      }
    });
    setData([...newArray]);
  };

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 9000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
      <Button variant="primary m-2" onClick={handleShow} disabled={isLoading}>
        {isLoading ? "Editing..." : "Edit Task"}
      </Button>
      <Button
        variant="outline-primary m-2"
        size="sm"
        onClick={markAsCompleteHandler}
      >
        Mark As Completed
      </Button>

      <Offcanvas className="bg-dark text-white" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-3">
            <p className="lead">Title: </p>
            <input ref={titleRef} type="text" className="form-control" />
          </div>
          <div className="p-3">
            <p className="lead">Date: </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="p-3">
            <p className="lead">Body: </p>
            <textarea ref={bodyRef} type="text" rows={5} className="form-control" />
          </div>
          <div className="p-3">
            <button className="btn btn-primary" onClick={buttonClickHandler}>
              Save Changes
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditCards;
