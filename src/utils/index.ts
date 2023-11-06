// export function isEmpty<T>(obj: T[]): obj is T[];
// export function isEmpty<T>(obj: T): T;
// export function isEmpty<T>(obj: undefined | T[] | T): boolean {
//   if (obj === undefined) {
//     return true;
//   }
//   if (Array.isArray(obj)) {
//     return isNonEmptyArray(obj);
//   }
//   return Object.getOwnPropertyNames(obj).length === 0;
// }

// function isArray<T>(obj: T[]): obj is T[] {
//   return Array.isArray(obj);
// }

// function isNonEmptyArray<T>(obj: T[]): obj is T[] {
//   return obj.length > 0;
// }

// export function isNotEmpty(obj) {
//   return !isEmpty(obj);
// }

// type IsEmptyObject<Obj> = Obj extends undefined
//   ? true
//   : Obj extends any[]
//   ? true
//   : [keyof Obj] extends [never]
//   ? true
//   : false;
// export function isEmpty<Obj>(obj: Obj): IsEmptyObject<Obj>;
// export function isEmpty<T>(obj: T) {
//   if (!obj) {
//     return true;
//   }
//   if (Array.isArray(obj)) {
//     return isNonEmptyArray(obj);
//   }
//   return Object.getOwnPropertyNames(obj).length === 0;
// }

export function isDefined<T>(value: T | undefined | null): value is T {
  return typeof value !== "undefined" && value !== null;
}

type Empty = Empty.Array | Empty.Object | Empty.String;

export function isEmpty<T extends string | any[] | object>(
  subject: T | Empty
): subject is Bottom<T> {
  switch (typeof subject) {
    case "object":
      return Object.keys(subject).length === 0;
    case "string":
      return subject === "";
    default:
      return false;
  }
}

type Bottom<T> = T extends string
  ? Empty.String
  : T extends any[]
  ? Empty.Array
  : T extends object
  ? Empty.Object
  : never;
// export const isString = (value: any): value is string =>
//   typeof value === "string";
// export const isNumber = (value: any): value is number =>
//   typeof value === "number";
// export const isArray = <T>(value: any): value is Array<T> =>
//   Array.isArray(value);
// export const isObject = <T extends object>(value: any): value is T =>
//   value != null && !Array.isArray(value) && typeof value === "object";

// export const isEmpty = <T extends string | object | any[] | undefined>(
//   value: T
// ): value is never => {
//   if (isString(value) || isArray(value)) {
//     return value.length === 0;
//   }
//   if (isObject(value)) {
//     return Object.keys(value).length === 0;
//   }
//   throw new Error(
//     `checked value must be type of string | array | object. You provided ${
//       // tslint:disable-next-line:strict-type-predicates
//       value === null ? "null" : typeof value
//     }`
//   );
// };
