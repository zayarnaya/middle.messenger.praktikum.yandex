import { PlainObject } from "../../types";
import { isEqual } from "./isEqual";

export function isEqualArrays(lhs: PlainObject[], rhs: PlainObject[]): boolean {
    if(lhs.length != rhs.length) {
        return false;
    }
    let falsecount = 0;
    for(let i = 0; i < lhs.length; i++) {
        if(!isEqual(lhs[i], rhs[i])) {
            falsecount += 1;
        }
    }

    if(falsecount === 0) {
        return true;
    }
    return false;
}
