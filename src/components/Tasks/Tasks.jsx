import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import data from "../../data/tasks.json";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  console.log("data", data);
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map(function (elem, id) {
          return (
            <>
              <Task value={elem} id={elem.id} />
            </>
          );
        })}
      </ul>
      {data.length === 0 ? (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          Add Tasks
        </div>
      ) : null}
    </>
  );
};

export default Tasks;
