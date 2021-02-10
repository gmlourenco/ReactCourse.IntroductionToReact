import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  let toReturn;

  if (isEditing) {
    toReturn = (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    toReturn = (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskChange} value={taskState}>
          <option value="Waiting List">Waiting List</option>
          <option value="Running">Running</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    );
  }

  return toReturn;
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
