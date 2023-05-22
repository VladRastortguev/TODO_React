import React, { useState } from "react";

const AddTodo = ({ handleTask }) => {
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo.trim()) {
      alert("Заолните Поля!");
      return;
    }

    const newTask = {
      task: todo,
      status: false,
      id: Date.now(),
    };

    handleTask(newTask);

    setTodo("");
  };

  return (
    <div>
      <h2>Add TODO component</h2>
      <input type="text" onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddTodo;
