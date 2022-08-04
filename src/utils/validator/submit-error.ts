import { inputError } from "./input-error";
import { getData } from "../form-actions/get-data";

export function submitError() {
    let inputs = Array.from(document.getElementsByTagName("input"));
    let submitMessage: HTMLElement = document.querySelector(".submit-message");
    let truecounts: number = 0;
    for (let input of inputs) { //НЕЕЕЕЕЕЕЕЕТ

        if(inputError(input)) {
            truecounts +=1;
        }
    }

    if (truecounts === inputs.length + 1) {
        getData();
    } else if (truecounts < inputs.length + 1) {
        submitMessage.textContent = "Заполните все нужные поля";
    }
}
