import { inputError } from "./input-error";
import { getData } from "../form-actions/get-data";

export function submitError() {
    let inputs = Array.from(document.getElementsByTagName("input"));
    let submitMessage: HTMLElement = document.querySelector(".submit-message");
    let truecounts: number = 0;
    for (let input of inputs) { //НЕЕЕЕЕЕЕЕЕТ
        console.log(inputError(input));

        if(inputError(input)) {
            truecounts +=1;
        }
    }

    console.log(truecounts, inputs.length)

    if (truecounts === inputs.length) {
        getData();
    } else if (truecounts < inputs.length) {
        submitMessage.textContent = "Заполните все нужные поля";
    }
}
