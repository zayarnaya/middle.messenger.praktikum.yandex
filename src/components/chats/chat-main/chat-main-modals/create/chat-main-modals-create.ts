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
        
        const input: HTMLInputElement = document.getElementById("createChatModalInput") as HTMLInputElement;
        const inputData = {title: input.value};
        const requestData = JSON.stringify(inputData);
        console.log(requestData);


        const seek = new ChatSettingsController;
        seek.create(requestData)
        .then(response => {
          if( response.status == 200) {
          const resultField = document.getElementById("result") as HTMLElement;
          resultField.textContent = "Чат успешно создан! " + response.response;
          } else {
            resultField.textContent = "Что-то не получилось! " + response.response;
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
