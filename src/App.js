import React, { useState } from 'react';
import Todolist from './Todolist.js';


const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const changeHandler = e => {
    setTask(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(task)
    const newTodos = [...todo, task];
    setTodo(newTodos);
    console.log(todo)
    setTask('');
  }

  const deleteHandler = (indexValue) => {
    const newTodos = todo.filter((todo, index) => index !== indexValue);
    setTodo(newTodos)
  }
  return (
    <div>
      <div>
        <center>
          <h1>
            THIS IS TO-DO APPLICATION
          </h1>
          <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task} onChange={changeHandler} />  &nbsp; &nbsp;
            <input type="submit" value="add" name="add" />
          </form>
        </center>
      </div>
      <Todolist todolist={todo} deleteHandler={deleteHandler} />



    </div>
  )
}

export default App

