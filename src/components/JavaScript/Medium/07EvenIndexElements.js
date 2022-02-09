import React from "react";

function App() {
  const arr = [1,2,3,4,1,3,4,6,9];
  const value2 = arr.reduce((acc, val, i) => {
    if (i % 2 === 0 && i === arr.length - 1) return (acc + val) * val;
    if (i === arr.length - 1) return acc * val;
    if (i % 2 === 0) return acc + val;
    return acc;
  }, 0);
  console.log(value2);
  return(
    <div>
      Even Index Elements <br/>
      Add the all even index elements and finally multiply them with last index element<br/>
      <code>
        Input : [1,2,3]<br/>
        Outupt: (1+3) * 3 =9<br/><br/>
        Input : [2,6,2,4]<br/>
        Outupt: (2+2) * 4 =16<br/><br/>
        Input : [4,2,5,6,2,1,8]<br/>
        Outupt: (4+5+2+8) * 8 = 152<br/><br/>
      </code>
    </div>
  )
}

export default App;
