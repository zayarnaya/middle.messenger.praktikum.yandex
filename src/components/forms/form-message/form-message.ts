import { Form } from "../form";
import { FormProps } from "../../../types";
import sendMessageForm from "./form-message.hbs";
import { sendMessage } from "../../../utils/gotoChat";
import store from "../../../utils/store";
import { chatIDfromLocation } from "../../../consts";

export class FormMessage extends Form {
  public constructor(props: FormProps, classname?: string) {
    super(props, "div", classname);

    
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        let input: HTMLInputElement = document.getElementById(
          "message"
        ) as HTMLInputElement;
        let errorMessage: HTMLElement = document.querySelector(
          "#message + span.errormessage"
        );
        if (!input.value) {
          errorMessage.textContent = "Сообщение не должно быть пустым!";
          return;
        }
        //let result: Record<string, string> = { message: input.value };
        let message = input.value;

        //console.log(result);
        input.value = "";
        errorMessage.textContent = " ";
        console.log( store.getState(), "STATTE");
        //let chatID = store.getState().chat.id;
        let chatID = chatIDfromLocation();
        let userID = store.getState().user.id;
        let token = store.getState().chat.token;

        sendMessage(chatID, userID, token, message);
      },
    };
  }

  public render() {
    return this.compile(sendMessageForm, {});
  }
}
