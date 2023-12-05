import {
  useEffect,
  useState,
  useRef,
  ElementRef,
  ComponentProps,
  FormEvent,
} from "react";

type Edit = {
  id: number | null;
  text: string;
};

export type FormProps = {
  edit?: Edit;
  onSubmit: (formData: Edit) => void;
};

export default function Form({ edit, onSubmit }: FormProps) {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef<ElementRef<"input">>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange: ComponentProps<"input">["onChange"] = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (
    e:
      | FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={(e) => handleSubmit(e)} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
