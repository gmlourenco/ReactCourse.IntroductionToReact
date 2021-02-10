import React from "react";
import "./taskList.css";
import PropTypes from "prop-types";

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
    onAddTask("New Task", taskState);
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
      </div>
      <button className="btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
