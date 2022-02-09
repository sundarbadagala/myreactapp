import React, { useState, useEffect } from "react";

function Multi() {
  const [forms, setForms] = useState({ [new Date().getTime()]: "" });
  let frms = {};
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      let time = new Date().getTime();
      frms[time] = {};
      setForms({ ...forms, [time]: "" });
    }
  }, []);
  console.log(forms);
  return <div></div>;
}

export default Multi;
