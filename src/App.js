import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/EditTodo/EditTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null);

  function handleTask(newObj) {
    const newTodos = [...todos];

    newTodos.push(newObj);

    setTodos(newTodos);
  }

  function changeStatus(id) {
    let newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });

    setTodos(newTodos);
  }

  function getEditedTask(id) {
    let oneObj = todos.find((item) => item.id === id);

    setEditedObj(oneObj);
  }

  function saveChanges(newObj) {
    let newTodos = [...todos];

    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });

    setTodos(newTodos)

    setEditedObj(null)
  }

  return (
    <>
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        getEditedTask={getEditedTask}
      />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : (
        <h4>Not editing todo now</h4>
      )}
    </>
  );
};

export default App;
