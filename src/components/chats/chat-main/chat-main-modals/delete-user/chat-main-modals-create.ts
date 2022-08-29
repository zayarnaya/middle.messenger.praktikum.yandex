import { ChatsModalProps } from "../../../../../types";
import { SearchAPI } from "../../../../../utils/api/search-api";
import { Block } from "../../../../../utils/block";
import { ChatSettingsController } from "../../../../../utils/controllers/chatSettingsController";
import { isEmpty } from "../../../../../utils/minor-functions/isEmpty";
import chatMainModalCreate from "./chat-main-modal-create.hbs";



export class ChatsCreateChat extends Block<ChatsModalProps, ChatsCreateChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname = "modal");
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        //const form: HTMLFormElement = document.querySelector("#userSearchForm") as HTMLFormElement;
        const input: HTMLInputElement = document.getElementById("createChatModalInput") as HTMLInputElement;
        const inputData = {title: input.value};
        const requestData = JSON.stringify(inputData);
        console.log(requestData);
        //const searchRequest = new SearchAPI;

        const seek = new ChatSettingsController;
        seek.create(requestData)
        .then(response => {
          if( response.status == 200) {
          const resultField = document.getElementById("result") as HTMLElement;
          resultField.textContent = "Чат успешно создан! " + response.response;
          console.log(response.response, response.status);
          } else {
            console.log("ЧТО_ТО НЕ ТАК");
            console.log(response.response, response.status);
          }
          
        });
        
      },
    };

    this.eventTarget = "form";
  }

  public render() {
    return this.compile(chatMainModalCreate, this.props);
  }
}
