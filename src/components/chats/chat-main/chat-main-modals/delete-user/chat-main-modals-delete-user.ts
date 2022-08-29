import { chatIDfromLocation } from "../../../../../consts";
import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import chatMainModalDeleteUser from "./chat-main-modal-delete-user.hbs";

export class ChatsRemoveUser extends Block<ChatsModalProps, ChatsRemoveUser>{
  public constructor(props: ChatsModalProps) {
    super("div", props, false, "modal");
    this.events = {
      submit: function (e: Event) {
        e.preventDefault();
        const deleteUser = new ChatsController;
        const chatID = Number(chatIDfromLocation());
        let users = [];
        let usersForDeletion = document.getElementsByClassName("forDelete");

        for (let i = 0; i < usersForDeletion.length;  i++) {
          users.push(Number(usersForDeletion[i].id));
        };
        console.log(users, chatID);
        let sendData = JSON.stringify({
          users: users,
          chatId: chatID
        });
        deleteUser.deleteChatUsers(sendData)
        .then(response => console.log(response));


        }        
      };

    this.eventTarget = "form#delUser";

  }

  public render() {
    return this.compile(chatMainModalDeleteUser, this.props);
  }
}
