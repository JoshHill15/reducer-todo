import React, { useState, useReducer } from 'react';
import './App.css';
import Data from "./Data"
import TodoList from './components/TodoList';
import TodoForm from './components/todoForm';


function App() {
  
  const [data] = useState([])

  return (
    <div className="App">
      {/* <TodoList data = {data}/> */}
      <TodoForm />
    </div>
  );
}

export default App;
