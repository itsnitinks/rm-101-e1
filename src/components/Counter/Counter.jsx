import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  const [counts, setCounts] = useState(count);
  // NOTE: do not delete `data-testid` key value pair

  function handlecounter(value) {
    setCounts(counts + value);
  }
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          handlecounter(1);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value">{counts}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          if (counts > 0) {
            handlecounter(-1);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
