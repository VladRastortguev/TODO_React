import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleTask(newObj) {
    const newTodos = [...todos]

    newTodos.push(newObj)

    setTodos(newTodos)
  }

  function changeStatus(id) {
    let newTodos = todos.map((item) => {
      if(item.id === id) {
        item.status = !item.status
        return item
      } else {
        return item
      }
    })

      setTodos(newTodos);
  }

  return (
    <>
    <AddTodo handleTask={handleTask} />
    <TodoList todos={todos} changeStatus={changeStatus}/>
    </>
  );
}

export default App;
