// import React from 'react'
// import ReactDOM from 'react-dom'

// const EmployeContext = React.createContext()

// class App extends React.Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        id:101
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <h3>Welcome to app Component</h3>
//         Employee id:{this.state.id}
//         <EmployeContext.Provider value={this.state}>
//             <Employee/>
//         </EmployeContext.Provider>
//       </div>
//     )
//   }
// }

// class Employee extends React.Component{
//   static contextType = EmployeContext;
//   render() {
//     return (
//       <div>
//         <h3>Welcome to Employee component</h3>
//         Employee id:{this.context.id}
//         <Salary/>
//       </div>
//     )
//   }
// }

// class Salary extends React.Component{
//   static contextType = EmployeContext;
//   render() {
//     return (
//       <div>
//         <h3>Welcome to Salary component</h3>
//         Employee id:{this.context.id}
//       </div>
//     )
//   }
// }

// const element= <App/>

// ReactDOM.render(element, document.getElementById('root'))



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
