import type { Equal, Expect } from "@type-challenges/utils";

/** GIVEN */
type TUnion = "MARKETPLACE" | "MIRAKL" | "SURFING";

type TUnionAfterExclude = "MARKETPLACE" | "MIRAKL";

/**
 * WHEN
 *
 * TODO: Write your own utility types exclude
 * in order to exclude U from T.
 *
 *  Works for Union types
 */

type MyExclude<T, U extends T> = T extends U ? never : T;

/**
 * THEN
 */

type cases = [Expect<Equal<MyExclude<TUnion, "SURFING">, TUnionAfterExclude>>];
