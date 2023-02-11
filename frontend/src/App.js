import React from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Home';
const style = { backgroundColor: "rgb(236, 236, 236)" }
function App() {
    
    return (
      <div className="container " style={style} >
        <h1 className="mt-5 text-center pt-5">To Do List</h1>
        <AddTask />
        <Home />
      </div>
    );
}

export default App;
