import React from "react";

import "./InputFieldStyle.css";

import { Todo } from "../Model";

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (todo: Todo) => void;
  todo: string;
}

const InputField: React.FC<Props> = ({ setTodo, addTodo, todo }) => {
  const addTodoHandler = () => {
    if (todo) {
      addTodo({
        id: Date.now(),
        todo,
        isDone: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="container">
      <input
        placeholder="Enter Text"
        type="text"
        className="input__field"
        value={todo}
        maxLength={13}
        onChange={(e) => setTodo(e.target.value)}
      ></input>

      <button className="submit__btn" onClick={addTodoHandler}>
        Add a task
      </button>
    </div>
  );
};

export default InputField;
