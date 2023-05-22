import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleTask(newObj) {
    const newTodos = [...todos]

    newTodos.push(newObj)

    setTodos(newTodos)
  }

  return (
    <>
    <AddTodo handleTask={handleTask} />
    </>
  );
}

export default App;
