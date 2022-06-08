import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ value, functi }) => {
  // console.log(value);

  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {value.map(function (elem) {
          return (
            <>
              <Task intotal={elem} />
            </>
          );
        })}
      </ul>
      {value.length === 0 ? (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          Empty list Add a new task above
        </div>
      ) : null}
    </>
  );
};

export default Tasks;
