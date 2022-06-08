import React, { useState } from "react";

import styles from "./taskApp.module.css";

import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [tdata, settData] = useState(data);
  console.log(tdata);
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader value={tdata} />
      {/* Add Task */}
      <AddTask value={tdata} functi={settData} />
      {/* Tasks */}
      <Tasks value={tdata} functi={settData} />
    </div>
  );
};

export default TaskApp;
