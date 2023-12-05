import { useState } from "react";
import TodoForm, { FormProps } from "./Form";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const raise = (err: string): never => {
  throw new Error(err);
};

type EditTodo = NonNullable<FormProps["edit"]>;

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export type TodoProps = {
  todos: Todo[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: any) => void;
};

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }: TodoProps) => {
  const [edit, setEdit] = useState<EditTodo>({
    id: null,
    text: "",
  });

  const submitUpdate = (value: EditTodo) => {
    const id = raise("id mandatory");
    updateTodo(id, value);
    setEdit({
      id: null,
      text: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={todo.id}
        className="cursor-pointer"
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, text: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
