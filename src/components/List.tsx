import { useState } from "react";
import Form, { FormProps } from "./Form";
import Todo, { type TodoProps } from "./Todo";

type Todos = TodoProps["todos"];
type EditTodo = NonNullable<FormProps["edit"]>;

function List() {
  const [todos, setTodos] = useState<Todos>([]);

  const addTodo = (todo: EditTodo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos as Todos);
  };

  const updateTodo = (id: number, newValue: Todo) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="my-8 mx-0 text-white text-2xl">
        What's the Plan for Today?
      </h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default List;
