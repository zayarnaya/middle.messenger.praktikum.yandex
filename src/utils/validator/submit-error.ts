import { inputValidation } from "./input-validation";
import { getData } from "../form-actions/get-data";
import { checkPass } from "./check-pass";

export function submitValidation(): void {
    let inputs = Array.from(document.getElementsByTagName("input"));
    let submitMessage: HTMLElement = document.querySelector(".submit-message");
    let truecounts: number = 0;
    let pass: HTMLInputElement;
    let pass2: HTMLInputElement;
    let passEven: boolean = false;
    if (document.querySelectorAll("input[type='password']").length === 2) {
        pass = document.querySelectorAll("input[type='password']")[0] as HTMLInputElement;
        pass2 = document.querySelectorAll("input[type='password']")[1] as HTMLInputElement;
        if (checkPass(pass, pass2)) passEven = true;

    } else if (document.querySelectorAll("input[type='password']").length != 2) {
        passEven = true;
    }
    
    for (let input of inputs) {
        if (inputValidation(input)) {
            truecounts += 1;
        } else if (input.id == "avatar") {
            truecounts += 1;
        }
    }

    if (truecounts === inputs.length && passEven) {
        getData();
    } else if (truecounts < inputs.length || !checkPass(pass, pass2)) {
        submitMessage.textContent = "Заполните все нужные поля";
    }
}
