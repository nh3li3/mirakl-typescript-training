export function isEmpty(
  obj: any
): obj is undefined | null | never[] | { [k: PropertyKey]: never } {
  if (!obj) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.getOwnPropertyNames(obj).length === 0;
}

type Labels = {
  label: string;
};

export function getAllListLabels(list: Array<Labels> | undefined) {
  if (isEmpty(list)) {
    return null;
  }
  return list.map((value) => value.label).join(", ");
}
