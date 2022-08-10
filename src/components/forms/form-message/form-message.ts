import { Form } from "../form";
import sendMessageForm from "./form-message.hbs";

export class FormMessage extends Form {
    constructor(props, classname?: string) {
        super("sendmessage", props, classname);
        this.props = props;
        this.events = {
            submit: function(e) {
                e.preventDefault();
                let input: HTMLInputElement = document.getElementById("message") as HTMLInputElement;
                let errormessage: HTMLElement = document.querySelector("#message + span.errormessage");
                if(!input.value) {
                    errormessage.textContent = "Сообщение не должно быть пустым!";
                    return;
                }
                let result: Record<string, string> = {message: input.value};

                console.log(result);
                input.value = "";
                errormessage.textContent = " ";
            }
        }

    }

    render() {
        return this.compile(sendMessageForm, {})
    }


}
