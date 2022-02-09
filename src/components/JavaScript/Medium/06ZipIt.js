import React from "react";

function App() {
  const men = ["ram", "krishna", "siva", "vishnu", "hanuman"];
  const women = ["sita", "radha", "parvati", "laxmi"];
    // -------------------First Method---------------------
//   const Zip = (m, wom) => {
//     if (m.length === wom.length) {
//       const value = [];
//       for (let i = 0; i < m.length; i++) {
//         const result = [m[i], wom[i]];
//         value.push(result);
//       }
//       return value;
//     } else {
//       return "Pairs doesnt match";
//     }
//   };
//   console.log(Zip(men, women));
  // -------------------Second Method---------------------

  const Zip2=(m, w)=>{
      if(m.length === w.length){
        return w.map((item, i)=> [item, m[i]])
      }else{
          return 'Pair doesnt match'
      }
  }
  console.log(Zip2(men,women))
  return(
    <div>
      Match the same index elements from two arrays <br/>
      <code>
        Input : [1,2,3] ['a','b','c']<br/>
        Outupt: [1,'a'],[2,'b'],[3,'c']<br/><br/>
        Input: ["ram", "krishna", "siva", "vishnu"] ["sita", "radha", "parvati", "laxmi"]<br/>
        Output: ["ram","sita"],["krishna","radha"],["siva","parvati"],["vishnu","laxmi"]<br/><br/>
        Input: [1,2,3]['a','b']<br/>
        Output: Pairs doesnt match
      </code>
    </div>
  )
}

export default App;
