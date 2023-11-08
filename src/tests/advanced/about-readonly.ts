import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

const immutableObject: Expected1 = {
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

type MyReadOnly<T> = { readonly [P in keyof T]: T[P] };

/**
 * THEN
 */

type cases = [Expect<Equal<Expected1, MyReadOnly<Todo>>>];

// @ts-expect-error because this object is immuable
immutableObject.completed = false;
