// Array.from({ length: 3 }, () => {
//     const h3Element = document.createElement("h3");
//     h3Element.textContent="hello sundarbhai"
//     document.body.appendChild(h3Element)
//     })
import React from "react";

function Loopes() {
  return (
    <div>
      {Array.from({ length: 3 }, () => <div>hello world</div>)}
    </div>
  );
}

export default Loopes;
