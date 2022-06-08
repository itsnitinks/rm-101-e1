import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ value, functi }) => {
  // NOTE: do not delete `data-testid` key value pair
  // console.log(value)
  // console.log(functi)

  var id = value.length === 0 ? 1 : value[value.length - 1].id + 1;
  const [data, setData] = useState({
    //writeaccr to json
    id: id,
    text: "",
    done: false,
    count: 1
  });

  function handlechange(x) {
    setData({
      ...data,
      text: x
    });
  }

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        onChange={(event) => {
          handlechange(event.target.value);
        }}
      />
      <button data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
