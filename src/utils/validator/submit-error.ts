import { inputError } from "./input-error";
import { getData } from "../form-actions/get-data";
import { checkPass } from "./check-pass";

export function submitError() {
    let inputs = Array.from(document.getElementsByTagName("input"));
    let submitMessage: HTMLElement = document.querySelector(".submit-message");
    let truecounts: number = 0;
    let pass: HTMLInputElement;
    let pass2: HTMLInputElement;
    if (document.querySelectorAll("input[type='password']").length > 1) {
        pass = document.querySelectorAll("input[type='password']")[0] as HTMLInputElement;
        pass2 = document.querySelectorAll("input[type='password']")[1] as HTMLInputElement;
        console.log(pass, pass2, "ПАРОЛИ");
    }
    console.log(document.querySelectorAll("input[type='password']"), "ПОЛЯ ПАРОЛИ");
    for (let input of inputs) {
        console.log(inputError(input));

        if (inputError(input)) {
            truecounts += 1;
        }
    }

    console.log(truecounts, inputs.length);
    console.log(truecounts === inputs.length);
    console.log(truecounts < inputs.length);
    console.log(checkPass(pass, pass2));

    if (truecounts === inputs.length && checkPass(pass, pass2)) {
        console.log("ВЕРНО")
        getData();
    } else if (truecounts < inputs.length || !checkPass(pass, pass2)) {
        submitMessage.textContent = "Заполните все нужные поля";
    }
}
