import React from "react";

function App(arr, str) {
  // -----------------------First Method----------------------
  const Main = (arr, str) => {
    if (str === "Asc") {
      return arr.sort((a, b) => a - b);
    } else if (str === "Des") {
      return arr.sort((a, b) => b - a);
    } else {
      return arr;
    }
  };
  // ----------------------------Second Method-----------------------
  const Main2 = (arr, str) => {
    const result =
      str === "Asc"
        ? arr.sort((a, b) => a - b)
        : str === "Des"
        ? arr.sort((a, b) => b - a)
        : arr;
    return result;
  };
  console.log(Main([11, 111, 16, 19, 43, 7, 9], "Des"));
  console.log(Main2([11, 111, 16, 19, 43, 7, 9], "Asc"));
  return (
    <div>
      Sort this array <br />
      <br />
      <code>
        input : [11,111,16,19,43,7,9], Asc
        <br />
        output:  [7, 9, 11, 16, 19, 43, 111]
        <br />
        <br />
        input : [11,111,16,19,43,7,9], Des
        <br />
        output: [111, 43, 19, 16, 11, 9, 7]
        <br />
        <br />
        input : [11,111,16,19,43,7,9], None
        <br />
        output: [11,111,16,19,43,7,9]
      </code>
    </div>
  );
}

export default App;
