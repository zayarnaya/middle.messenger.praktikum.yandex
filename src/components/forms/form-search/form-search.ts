import formSearch from "./form-search.hbs";
import { FormProps } from "../../../types";
import { Block } from "../../../utils/block";
import "./form-search.scss";
import { ChatsController } from "../../../utils/controllers/chatsController";
import store from "../../../utils/store";

export class SearchForm extends Block<SearchForm> {
  public constructor(props: FormProps) {
    super("div", props, false, props.classname);
    this.events = {
      submit: (e: Event) => {
        e.preventDefault();

        const search = new ChatsController;
        let form: HTMLFormElement = document.querySelector("form.chat-list__searchform") as HTMLFormElement;
        let input: HTMLInputElement = document.getElementById("search") as HTMLInputElement;
        let message: HTMLElement = document.getElementById("search-res") as HTMLElement;
        message.classList.remove("color-red");
        message.textContent = "";
        if(!!input.value) {
          search.seekChats({
            title: input.value
          })
          .then(response => {
            if(response.status == 200) {
              let adata = JSON.parse(response.response);
              store.set("chatlist", adata);
            } else {
              message.textContent = "Что-то не ищется, сервер говорит " + response.response;
            }
          })

        } else {
          message.classList.add("color-red");
          message.textContent = "Что ищем-то?";
        }



      }
    }

    this.eventTarget = "form.chat-list__searchform";
  }

  public render() {
    return this.compile(formSearch, {});
  }
}
