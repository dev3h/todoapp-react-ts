import { TodoType } from "../App";
import Todo from "./Todo";

const TodoList = ({
  todo,
  updateCheckTodo,
  deleteTodo,
}: {
  todo: TodoType[];
  updateCheckTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}) => {
  return (
    <ul>
      {todo?.map((item) => (
        <Todo
          key={item?.id}
          todo={item}
          isCompleted={item?.isCompleted}
          updateCheckTodo={updateCheckTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList