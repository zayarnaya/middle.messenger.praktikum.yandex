import { Form } from "../form";
import { FormProps } from "../../../types";
import sendMessageForm from "./form-message.hbs";
import store from "../../../utils/store";
import { chatIDfromLocation } from "../../../consts";
import { sendMessage } from "../../../utils/sendMessage";
import { UserProps } from "../../../APItypes";

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
        const chatID = chatIDfromLocation();
        const user: UserProps = store.getState().user as UserProps;
        const thisChat: {
          id: number,
          token: string
        } = store.getState().thisChat as {
          id: number,
          token: string
        };
        let userID = user.id;
        let token = thisChat.token;

        sendMessage(chatID, userID, token, message);
      },
    };
  }

  public render() {
    return this.compile(sendMessageForm, {});
  }
}
