import { Form } from "../form";
import { FormProps } from "../../../types";
import sendMessageForm from "./form-message.hbs";

import store from "../../../utils/store";
import { chatIDfromLocation } from "../../../consts";
import { sendMessage } from "../../../utils/sendMessage";

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
        ) as HTMLInputElement;
        if (!input.value) {
          errorMessage.textContent = "Сообщение не должно быть пустым!";
          return;
        }
        let message = input.value;

        input.value = "";
        errorMessage.textContent = " ";
        let chatID = chatIDfromLocation();
        let userID = store.getState().user.id;
        let token = store.getState().this_chat.token;

        sendMessage(chatID, userID, token, message);
      },
    };
  }

  public render() {
    return this.compile(sendMessageForm, {});
  }
}
