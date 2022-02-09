import { useEffect, useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    setTodos(data);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);
  const addTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <>
      <input type="text" value={todo} onChange={addTodo} />
      {todos.map((todo) => (
        <h1 key={todo}>{todo}</h1>
      ))}
      <button type="submit" onClick={handleSubmit}>
        add Todo
      </button>
    </>
  );
}
