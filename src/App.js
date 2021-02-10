import React, { useState } from "react";
import "./styles.css";

import NavBar from "./basePage/navBar/NavBar";
import TaskList from "./basePage/taskList/TaskList";

let curID = 0;
const generateId = () => {
  return ++curID;
};

const states = {
  wl: "Waiting List",
  r: "Running",
  c: "Completed"
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]; //add new task to the previous ones
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title={states.wl}
          onAddTask={addTask}
          taskState={states.wl}
          tasks={tasks.filter((t) => t.state === states.wl)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={states.r}
          onAddTask={addTask}
          taskState={states.r}
          tasks={tasks.filter((t) => t.state === states.r)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={states.c}
          onAddTask={addTask}
          taskState={states.c}
          tasks={tasks.filter((t) => t.state === states.c)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
