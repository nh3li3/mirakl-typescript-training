import { TodoPayload } from "./todoApiModel";
import { todos } from "./todoMock";

export const fetchTodos = (): Promise<TodoPayload> =>
  new Promise((res) => setTimeout(() => res(todos), 5000));
