import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { shapeActions } from "../Manager";

const Shapes = () => {
  const dispatch = useDispatch();

  const onSelection = (shape) => {
    dispatch(
      shapeActions.setShape({
        shape,
      })
    );
  };

  return (
    <React.Fragment>
      <h2>Shapes</h2>
      <div>
        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Square")}
        >
          Square
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Rectangle")}
        >
          Rectangle
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Triangle")}
        >
          Triangle
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Shapes;
