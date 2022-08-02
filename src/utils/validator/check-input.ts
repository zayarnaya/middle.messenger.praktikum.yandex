import { showError } from "./show-error.js";
import { removeError } from "./remove-error";

export function checkInput(elem: HTMLInputElement, ev?: Event) : void {
    if (this != window) {
        elem = this;
    };

    let thisId = elem.id; //хз что делать с эррормсг
    let errorMessage: HTMLElement = document.querySelector(`#${thisId} + span.errormessage`) as HTMLElement;

    if (!elem.validity.valid) {
        showError(elem, errorMessage);
    } else if (elem.validity.valid) {
        removeError(errorMessage);
    }
}
