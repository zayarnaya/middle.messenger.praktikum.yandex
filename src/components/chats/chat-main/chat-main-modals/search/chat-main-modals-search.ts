import { UserProps } from "../../../../../APItypes";
import { chatIDfromLocation } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatSettingsController } from "../../../../../utils/controllers/chatSettingsController";
import { HTTPTransport } from "../../../../../utils/http-transport";
import { isEmpty } from "../../../../../utils/minor-functions/isEmpty";
import chatMainModalSearch from "./chat-main-modal-search.hbs";

export class ChatsUserSearch extends Block<ChatsUserSearch> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, (classname = "modal"));
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const input: HTMLInputElement = document.getElementById(
          "userSearchModalInput"
        ) as HTMLInputElement;
        const inputData = { login: input.value };
        const requestData = JSON.stringify(inputData);

        const seek = new ChatSettingsController();
        seek.seek(requestData).then((response) => {
          const resultField: HTMLElement = document.getElementById(
            "result"
          ) as HTMLElement;

          if (response.status != 200) {
            resultField.textContent = "Что-то случилось: " + response.response;
          }
          const names: Record<string, string>[] = [];
          const responseData: UserProps[] = JSON.parse(response.response);

          if (!!isEmpty(responseData)) {
            resultField.textContent = "Никого не нашли :(";
          } else {
            responseData.forEach((user) => {
              names.push({
                [`${user.id}`]: `${user.first_name} ${user.second_name} id:${user.id}`,
              });
            });
            let list = new DocumentFragment();
            let ul = document.createElement("ul");
            names.forEach((name) => {
              let li = document.createElement("li");
              li.textContent = Object.values(name)[0] as string;
              let userID = Object.keys(name)[0];
              li.setAttribute("data-user-id", userID);
              li.addEventListener("click", function () {
                let put = new HTTPTransport();
                let theID = this.getAttribute("data-user-id");
                let chatID = chatIDfromLocation();
                let requestData = {
                  users: [theID],
                  chatId: chatID,
                };

                let json = JSON.stringify(requestData);

                put.put(`https://ya-praktikum.tech/api/v2/chats/users`, {
                    data: json,
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      const resultField = document.getElementById(
                        "result"
                      ) as HTMLElement;
                      resultField.textContent =
                        "Друг теперь участвует в чате! " + response.response;
                    } else {
                      resultField.textContent =
                        "Что-то не получилось! " + response.response;
                    }
                  });
              });
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
