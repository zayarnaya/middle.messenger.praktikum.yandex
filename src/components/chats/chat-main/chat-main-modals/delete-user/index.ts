import { chatIDfromLocation } from "../../../../../consts";
import { ChatsController } from "../../../../../utils/controllers/chatsController";
import { render } from "../../../../../utils/renderDOM";
import { Button } from "../../../../buttons/button-submit/button";
import { ChatsRemoveUser } from "./chat-main-modals-delete-user";

export function modalUserRemove() {
    const modal = new ChatsRemoveUser({
        button: new Button({
            name: "removeUser",
            label: "удалить выбранных пользователей",
            class: "removeButton",
            type: "button"
        })
    });

    render(".modal-place", modal);
    document.getElementById("close-button").addEventListener("click", function() {document.getElementById("modal-place").textContent = "";});
    const getUsers = new ChatsController;
    let id = chatIDfromLocation();
    getUsers.getChatUsers(id)

    .then(response => {
      if(response.status == 200) {
        let adata = JSON.parse(response.response);
        let ul = document.createElement('ul');
        ul.classList.add("forDeletion");
        adata.forEach(user => {
          let name: string = user.first_name + " " + user.second_name;
          let li = document.createElement('li');
          li.textContent = name;
          li.setAttribute("id", user.id);
          li.classList.add("users");
          //li.addEventListener("click", () => this.classList.toggle("forDelete"));
          li.addEventListener("click", function() {
            this.classList.toggle("forDelete");
          });
          ul.append(li);
        });
        let fragment = document.createDocumentFragment();
        fragment.appendChild(ul);
        document.querySelector(".userslist").append(fragment);
      }
    });
}