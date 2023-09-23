import React from "react";
import Card from "react-bootstrap/Card";
import EditCards from "./EditCards";

const Cards = ({ data, setData }) => {
  return data.map((task) => (
    <Card key={task.key} bg="dark" text="white" style={{ margin: "3px auto" }}>
      <Card.Body>
        <Card.Title className="display-4">{task.title}</Card.Title>
        <Card.Text className="lead">{task.body}</Card.Text>
        <Card.Text className="lead">
          {task.date.getDate() +
            "-" +
            (task.date.getMonth() + 1) +
            "-" +
            task.date.getFullYear()}
        </Card.Text>
      </Card.Body>
      <EditCards data={data} setData={setData} task={task} />
    </Card>
  ));
};

export default Cards;
