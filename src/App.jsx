import "./App.css";
import TaskForm from "./components/TaskForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./components/Task";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
    console.log(todos);
  };
  return (
    <>
      <TaskForm addTodos={addTodos}></TaskForm>
      {todos.map((t) => (
        <Task key={t.id} task={t.task} />
      ))}
    </>
  );
}

export default App;
