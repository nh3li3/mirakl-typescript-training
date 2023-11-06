import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
}

interface Expected1 {
  title: string;
  description: string;
  completed: boolean;
}

/**
 * WHEN
 *
 * TODO: Write your own utility types pick
 */

type MyRequired<T> = { [P in keyof T]-?: T[P] };

/**
 * THEN
 */

type cases = [Expect<Equal<Expected1, MyRequired<Todo>>>];
