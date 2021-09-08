import React, { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(1);
  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDecrement = () => {
    count > 1 ? setCount((prevState) => prevState - 1) : setCount(1);
  };
  const changeHandler = (e) => {
    setCount(parseInt(e.target.value));
  };
  return (
    <div>
      <main>
        <button onClick={countDecrement} className="btn-decrement">
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => changeHandler(e)}
          className="input"
        />
        <button onClick={countIncrement} className="btn-increment">
          +
        </button>
      </main>
    </div>
  );
}

export default Counter;
