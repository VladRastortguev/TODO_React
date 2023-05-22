import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
    <AddTodo />
    </>
  );
}

export default App;
