import { ChatsModalProps } from "../../../../../types";
import { SearchAPI } from "../../../../../utils/api/search-api";
import { Block } from "../../../../../utils/block";
import { ChatSettingsController } from "../../../../../utils/controllers/chatSettingsController";
import { HTTPTransport } from "../../../../../utils/http-transport";
import { isEmpty } from "../../../../../utils/minor-functions/isEmpty";
import chatMainModalSearch from "./chat-main-modal-search.hbs";



export class ChatsUserSearch extends Block<ChatsModalProps, ChatsMenuSearch> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname = "modal");
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        //const form: HTMLFormElement = document.querySelector("#userSearchForm") as HTMLFormElement;
        const input: HTMLInputElement = document.getElementById("userSearchModalInput") as HTMLInputElement;
        const inputData = {login: input.value};
        const requestData = JSON.stringify(inputData);
        console.log(requestData);
        //const searchRequest = new SearchAPI;

        const seek = new ChatSettingsController;
        seek.seek(requestData)
        .then(response => {
          const resultField = document.getElementById("result");
          console.log(response.response, response.status);
          const names  = [];
          const responseData = JSON.parse(response.response);
          //console.log(isEmpty(responseData))
          if(!!isEmpty(responseData)) {
            resultField.textContent = "Никого не нашли :(";
          
          } else {



          responseData.forEach(user => {
            names.push({[user.id]: `${user.first_name} ${user.second_name} id:${user.id}`});
          });
          let list = new DocumentFragment();
          let ul = document.createElement("ul");
          names.forEach(name => {
            console.log(name);
            let li = document.createElement("li");
            li.textContent = Object.values(name)[0] as string;
            let userID = Object.keys(name)[0];
            li.setAttribute("data-user-id", userID);
            li.addEventListener("click", function () {
              //alert("НУ КЛИК");
              console.log(this);

              let put = new HTTPTransport;
              let theID = this.getAttribute("data-user-id");
              let chatID = prompt("ID чата", "0");
              let requestData = {
                users: [theID],
                chatId: chatID
              };
              console.log(JSON.stringify(requestData));
              let json = JSON.stringify(requestData);
              let theData = JSON.parse(json);
              console.log(theData);
              put.put(`https://ya-praktikum.tech/api/v2/chats/users`, {
                data: json
              })
              .then(response => console.log(response));
            })
            ul.append(li);
          });
          list.appendChild(ul);

          resultField.textContent = "";
          resultField?.appendChild(list);

        }

          
        });
        
      },
    };

    this.eventTarget = "form";
  }

  public render() {
    return this.compile(chatMainModalSearch, this.props);
  }
}
