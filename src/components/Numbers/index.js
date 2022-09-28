import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { numberActions } from "../Manager";

const Numbers = () => {
  const dispatch = useDispatch();

  const onSelection = (number) => {
    dispatch(
      numberActions.setNumber({
        number,
      })
    );
  };

  return (
    <React.Fragment>
      <h2>Numbers</h2>
      <div className="">
        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("One")}
        >
          One
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Two")}
        >
          Two
        </Button>

        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => onSelection("Three")}
        >
          Three
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Numbers;
