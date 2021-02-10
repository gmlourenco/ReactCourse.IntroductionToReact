import React from "react";
import "./taskList.css";
import propTypes from "prop-types";

import TaskItem from "../taskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask
}) {
  {
    /*instead of props I can use directly the name of the variable and delete de "props." down bellow*/
  }
  {
    /*
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return ++currentCount;
    });
  };
*/
  }

  const addTask = () => {
    onAddTask("Double-click here to add my name", taskState);
  };

  return (
    <div className="taskList">
      <div className="title">{title}</div>
      {/*inside brackets is simple javascript code*/}
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Empty List</div>}
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
        {tasks.length}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
