import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
}

interface Expected {
  title: string;
  description: string;
  completed: boolean;
}

/**
 * WHEN
 *
 * TODO: Write your own utility types pick
 */

type MyRequired = unknown;

/**
 * THEN
 */

type cases = [Expect<Equal<MyRequired<Todo>, Expected>>];
