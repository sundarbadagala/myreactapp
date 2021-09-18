import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = () => {
      console.log(request);
      if (request.status === 200) {
        setData(JSON.parse(request.response));
      } else {
        setError(`error ${request.status} ${request.statusText}`);
      }
    };
  }, []);
  console.log(error);
  return(
    <div>
        {
            data.map(item => item.username)
        }
    </div>
  );
}

export default App;
