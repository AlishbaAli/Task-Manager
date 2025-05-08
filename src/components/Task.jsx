import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Task;
