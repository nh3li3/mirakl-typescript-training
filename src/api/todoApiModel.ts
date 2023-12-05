type Todo = {
  id: number;
  label: string;
  isComplete: boolean;
};

export type TodoPayload = {
  data: Todo[];
};
