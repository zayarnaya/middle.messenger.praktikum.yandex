import { SearchAPI } from "../../../../../utils/api/search-api";
import { Block } from "../../../../../utils/block";
import { ChatSettingsController } from "../../../../../utils/controllers/chatSettingsController";
import { isEmpty } from "../../../../../utils/minor-functions/isEmpty";
import chatMainModalCreate from "./chat-main-modal-create.hbs";



export class ChatsCreateChat extends Block<ChatsMenuProps, ChatsCreateChat> {
  public constructor(props: ChatsMenuProps, classname?: string) {
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
          const resultField = document.getElementById("result");
          console.log(response.response, response.status);

          /*
          const names: string[] = [];
          const responseData = JSON.parse(response.response);
          //console.log(isEmpty(responseData))
          if(!!isEmpty(responseData)) {
            resultField.textContent = "Никого не нашли :(";
          
          } else {



          responseData.forEach(user => {
            names.push(`${user.first_name} ${user.second_name}`);
          });
          let list = new DocumentFragment();
          let ul = document.createElement("ul");
          names.forEach(name => {
            console.log()
            let li = document.createElement("li");
            li.textContent = name;
            li.addEventListener("click", function() {
              alert("НУ КЛИК");
            })
            ul.append(li);
          });
          list.appendChild(ul);

          resultField.textContent = "";
          resultField?.appendChild(list);

        }*/

          
        });
        
      },
    };

    this.eventTarget = "form";
  }

  public render() {
    return this.compile(chatMainModalCreate, this.props);
  }
}
