import { isPlainObject } from "./isPlainObject";
import { PlainObject } from "../../types";

export function set(
  object: PlainObject | unknown,
  path: string,
  value: unknown
): PlainObject | unknown {
  if (!isPlainObject(object)) return object;
  
  if (typeof path != "string") {
    throw new Error("path must be string");
  }

  let keys = path.split(".").reduceRight((acc, key) => ({ [key]: acc }), value);

  Object.assign(object, keys);

  return object;
}
