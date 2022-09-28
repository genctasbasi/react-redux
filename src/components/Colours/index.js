import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { colourActions } from "../Manager";

const Colours = () => {
  const dispatch = useDispatch();

  const onSelection = (colour) => {
    dispatch(
      colourActions.setColour({
        colour,
      })
    );
  };

  return (
    <React.Fragment>
      <h2>Colours</h2>
      <div>
        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Red")}
        >
          Red
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Blue")}
        >
          Blue
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Green")}
        >
          Green
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Colours;
