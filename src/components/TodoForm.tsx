import { useEffect, useState, useRef } from "react";
import { EventFor } from "../types/global";

export default function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: EventFor<"input", "onChange">) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      {props.edit ? (
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="w-80 bg-transparent text-white"
          />
        </>
      ) : (
        <div></div>
      )}
    </form>
  );
}
