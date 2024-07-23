import { ChangeEvent, useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

export type TodoType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};

function App() {
  const [todo, setTodo] = useState<TodoType[]>(()=> {
    const saved = localStorage.getItem("todo");
    const initialValue = JSON.parse(saved || "[]");
    return initialValue;
  });
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setInputValue("");
    setTodo([{ id: Math.random().toString(), name: inputValue }, ...todo]);
  };

  const handleCheckTodo = (id: string) => {
    setTodo((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
    );
  };

  const deleteTodo = (id: string) => {
    setTodo((prevState) => prevState.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div style={{ width: "fit-content" }}>
      <CreateTodo
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList todo={todo} updateCheckTodo={handleCheckTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
