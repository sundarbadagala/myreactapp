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
      {
        printObject(data).map((d) => (<div key={d.label}>{d.label} {d.value}</div>))
      }
    </div>
  );
}

export default Main;
