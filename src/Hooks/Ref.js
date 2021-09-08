import React, { useRef, useState } from "react";
//import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const clearInput = () => {
    inputRef.current.value = "";
  };
  console.log(input)
  return (
    <div className="App">
      my inout is {input}
      <input
        type="text"
        ref={inputRef}
        value={input}
        placeholder="enter text arrai"
        onChange={handleChange}
      />
      <button onClick={clearInput}>clearInput </button>
    </div>
  );
  }
  export default App