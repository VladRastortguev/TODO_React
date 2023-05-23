import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, changeStatus, getEditedTask }) => {
  let style = {
    color: "red",
    listStyleType: "none",
  };

  return (
    <>
      <h2>TODO List Component</h2>
      <ul style={style}>
        {todos.map((item) => (
          <li key={item.id} className={item.status ? 'complited' : ""}>
            <input type="checkbox" onChange={(() => changeStatus(item.id))}/>
            {item.task}
            <button onClick={() => getEditedTask(item.id)}>Edit Task</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
