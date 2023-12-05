import { ReactNode, createContext, useContext, useState } from "react";

type TodosContextValue = {
  todos: boolean;
};

export const TodosContext = createContext<TodosContextValue | null>(null);

type ShipmentImportProviderProps = {
  children: ReactNode;
};

export const TodosProvider = ({ children }: ShipmentImportProviderProps) => {
  const [todos, setTodos] = useState();

  return <TodosContext.Provider value={}>{children}</TodosContext.Provider>;
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("need to be wrap");
  }

  return context;
};
