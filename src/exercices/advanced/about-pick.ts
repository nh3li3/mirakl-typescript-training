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

type MyPick = unknown;

/**
 * THEN
 */

type cases = [
  Expect<Equal<MyPick<Todo, "title">, Expected1>>,
  Expect<Equal<MyPick<Todo, "title" | "completed">, Expected2>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">,
];
