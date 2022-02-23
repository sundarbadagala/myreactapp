import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrementValue, incrementValue } from "./redux/actions";

function Count() {
  const Count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="m-3">
        Count App using Use Redux<br/>
      <ButtonGroup>
        <Button onClick={() => dispatch(incrementValue())}>+</Button>
        <Button variant="outline-primary" disabled>
          {Count}
        </Button>
        <Button onClick={() => dispatch(decrementValue())}>-</Button>
      </ButtonGroup>
    </div>
  );
}

export default Count;
