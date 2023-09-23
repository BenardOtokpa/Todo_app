import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddCard = ({ data, setData }) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [index, setIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const buttonClickHandler = () => {
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    if (data === null) {
      setData([{ key: index, title: title, body: body, date: startDate }]);
    } else {
      setData((prevData) => [
        { key: index, title: title, body: body, date: startDate },
        ...prevData,
      ]);
    }
    setIndex((prev) => prev + 1);
    handleClose();
  };

  return (
    <>
      <Button variant="primary btn-lg" onClick={handleShow}>
        Add Task
      </Button>

      <Offcanvas
        className="bg-dark text-white"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="display-3">Add Task</Offcanvas.Title>
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
            <textarea
              ref={bodyRef}
              type="text"
              rows={5}
              className="form-control"
            />
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

export default AddCard;
