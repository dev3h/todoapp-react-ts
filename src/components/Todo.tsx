import { TodoType } from "../App";

const Todo = ({
  todo,
  isCompleted,
  updateCheckTodo,
  deleteTodo,
}: {
  todo: TodoType;
  isCompleted: boolean | undefined;
  updateCheckTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "5px",
        backgroundColor: "lightblue",
        marginTop: "5px",
        padding: "4px",
      }}
    >
      {isCompleted ? <del>{todo?.name}</del> : <span>{todo?.name}</span>}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <input type="checkbox" checked={isCompleted} onChange={() => updateCheckTodo(todo?.id)} />
        <span onClick={() => deleteTodo(todo?.id)} style={{ color: "red", fontSize: "18px", cursor: 'pointer' }}>
          x
        </span>
      </div>
    </li>
  );
};

export default Todo;
