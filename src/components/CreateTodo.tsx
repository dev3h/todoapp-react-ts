import { ChangeEvent } from "react";

type props = {
    inputValue: string;
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddTodo: () => void;
}

const CreateTodo = ({ inputValue, handleChangeInput, handleAddTodo }: props) => {
  return (
    <div>
      <input value={inputValue} type="text" onChange={handleChangeInput} />
      <button onClick={() => handleAddTodo()}>Add</button>
    </div>
  );
};

export default CreateTodo;
