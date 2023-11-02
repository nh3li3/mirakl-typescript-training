import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/**
 * WHEN
 *
 * TODO: Write your own utility types pick
 */

type MyPick<T, Keys extends keyof T> = { [P in Keys]: T[P] };

/**
 * THEN
 */

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">,
];
