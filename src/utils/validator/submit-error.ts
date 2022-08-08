import { inputError } from "./input-error";
import { getData } from "../form-actions/get-data";
import { checkPass } from "./check-pass";

export function submitError() {
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
    console.log(document.querySelectorAll("input[type='password']"), "ПОЛЯ ПАРОЛИ");
    for (let input of inputs) {
        if (inputError(input)) {
            truecounts += 1;
        } else if (input.id == "avatar") {
            truecounts += 1;
        }
    }

    if (truecounts === inputs.length && passEven) {
        console.log("ВЕРНО")
        getData();
    } else if (truecounts < inputs.length || !checkPass(pass, pass2)) {
        submitMessage.textContent = "Заполните все нужные поля";
    }
}
