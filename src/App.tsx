import React, { useState } from "react";

//components
import InputField from "./components/InputField";

// style
import "./App.css";

import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const completeTodo = (id: number) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <>
      <div className="App">
        <h1 className="title">My Tasks</h1>
        <InputField setTodo={setTodo} addTodo={addTodo} todo={todo} />
      </div>
      <div style={{ marginTop: "20px" }}>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className={`todo__item `}>
              <p className={`${todo.isDone ? "Done" : ""}`}>{todo.todo}</p>
              <div className="actions">
                <p onClick={() => deleteTodo(todo.id)}>Delete</p>
                <p onClick={() => completeTodo(todo.id)}>Done</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
