import {checkInput} from "./check-input.js";

export function validatorAll() {
    let inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach( element => element.addEventListener('input', checkInput) );
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        inputs.forEach( element => checkInput(element) );

    });
}