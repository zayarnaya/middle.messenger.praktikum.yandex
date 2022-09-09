import { isArray } from "./isArray";
import { isPlainObject } from "./isPlainObject";

export function cloneDeep<T extends object = object>(obj: T) {
  let vals: any[];
  let keys: Array<keyof {}>;
  let arr: any[] = [];
  let OBJECT: Record<string, any> = {};

  if (!isArray(obj)) {
    //если у нас объект

    vals = Object.values(obj);
    keys = Object.keys(obj) as Array<keyof {}>;

    keys.forEach(function (key) {
      if (!isArray(obj[key]) && !isPlainObject(obj[key])) {
        Object.assign(OBJECT, { [key]: obj[key] });
      } else if (isArray(obj[key]) || isPlainObject(obj[key])) {
        Object.assign(OBJECT, { [key]: cloneDeep(obj[key]) });
      }
    });
  } else if (isArray(obj)) {
    //если у нас массив

    vals = obj;

    vals.forEach((val) => {
      if (!isArray(val) && !isPlainObject(val)) {
        arr.push(val);
      } else if (isArray(val) || isPlainObject(val)) {
        arr.push(cloneDeep(val));
      }
    });
  }

  return isArray(obj) ? arr : OBJECT;
}
