import React from 'react'

const data = {
    name: "Sundar",
    age: 23,
    class: 10,
    color: "red",
    bike:'duke'
  };

  delete data.class
  console.log(data)

function App() {
    const keys= Object.keys(data)
    console.log(keys)
    return (
        <div>
            {
                keys.map(item => <div key={item}>{item} {data[item]}</div>)
            }
        </div>
    )
}

export default App
