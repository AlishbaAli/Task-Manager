import React, { useState } from "react";

const TaskForm = ({ addTodos }) => {
  const [Task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(Task);
    setTask("");
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add your task"
      />
      <button className="task-btn" type="submit">
        Submit Task
      </button>
    </form>
  );
};

export default TaskForm;
