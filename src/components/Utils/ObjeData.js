import React from "react";

const printObject = (data) => {
  let arrData = [];
  for (let i in data) {
    arrData.push({ label: i, value: data[i] });
  }
  return arrData;
};
function Main({data}) {
  return (
    <div>
      {
        printObject(data).map((d) => (<div key={d.label}>{d.label} {d.value}</div>))
      }
    </div>
  );
}

export default Main;
