import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Utils/index'


function App() {
  return (
    <div>
      <Navbar count={900}/>
    </div>
  );
}

export default App;