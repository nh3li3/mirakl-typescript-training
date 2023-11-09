import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
type Arr = ["firstArg", "secondArg", "thidArg", "fourthArg"];

/**
 * WHEN
 *
 * TODO: Write your own utility types First
 * to retrieve the value at the index 0
 */

type First = unknown;

/**
 * THEN
 */

type cases = [Expect<Equal<First<Arr>, "firstArg">>];
