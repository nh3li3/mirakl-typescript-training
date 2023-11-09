import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

const immutableObject: Expected = {
  title: "title",
  description: "description",
  completed: true,
};

/**
 * WHEN
 *
 * TODO: Write your own utility types readonly
 * to mark each property of un object as readonly
 */

type MyReadOnly = unknown;

/**
 * THEN
 */

type cases = [Expect<Equal<MyReadOnly<Todo>, Expected>>];

// @ts-expect-error because this object is immuable
immutableObject.completed = false;
