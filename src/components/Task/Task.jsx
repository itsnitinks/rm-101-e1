import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({ intotal }) => {
  console.log("props", intotal);

  function changeit() {}
  // console.log(props.);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{intotal.text}</div>
      <Counter />
      {/* Counter here */}
      <button
        data-testid="task-remove-button"
        onClick={() => {
          changeit();
        }}
      >
        X
      </button>
    </li>
  );
};

export default Task;
