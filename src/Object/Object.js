import React from "react";

const data = {
  name: "Sundar",
  age: 23,
  class: 10,
  color: "red",
  bike:'duke'
};

const printObject = (data) => {
  let arrData = [];
  for (let i in data) {
    arrData.push({ label: i, value: data[i] });
  }
  return arrData;
};
function Main() {
  return (
    <div>
      {printObject(data).map((d) => (
        <>
          <h1>{d.label}</h1> 
          <h2>{d.value}</h2>
        </>
      ))}
    </div>
  );
}

export default Main;
