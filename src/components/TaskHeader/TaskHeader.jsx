import React from "react";
import styles from "./taskHeader.module.css";
import data from "../../data/tasks.json";
const TaskHeader = ({ value }) => {
  console.log("value", value);
  // sample values to be replaced
  let newt = value.filter(function (elem) {
    return elem.done !== true;
  });
  let totalTask = value.length;

  let unCompletedTask = newt.length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      You have <b data-testid="header-remaining-task">{unCompletedTask}</b>
      of<b data-testid="header-total-task">{totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
