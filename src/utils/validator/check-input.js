import {showError} from "./show-error.js";
import {removeError} from "./remove-error.js";

export function checkInput(elem) {

    if(this != window) {
        elem = this; 
    }
    let thisId = elem.id

    let errorMessage = document.querySelector(`#${thisId} + span.errormessage`);
    if(!elem.validity.valid) {
        showError(elem, errorMessage);
    }
    else if(elem.validity.valid) {
        removeError(errorMessage);
    }
}