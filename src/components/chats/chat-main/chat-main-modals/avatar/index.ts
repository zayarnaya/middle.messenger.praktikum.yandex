import { ChatsProps } from "../../../../../APItypes";
import { defaultChatAvatar, filePrefix } from "../../../../../consts";
import { render } from "../../../../../utils/renderDOM";
import store, { StoreEvents } from "../../../../../utils/store";
import { ImageAvatar } from "../../../../avatars/img-avatar/img-avatar";
import { Button } from "../../../../buttons/button-submit/button";
import { InputField } from "../../../../input/input-field";
import "./../chat-main-modals.scss";
import { ChatsChangeAvatar } from "./chat-main-modals-avatar";

export function changeChatAvatarModal() {
  const chat: ChatsProps = store.getState().chat as ChatsProps;
  let avatar: string = "";
  if (!!chat && !!chat.avatar && chat.avatar != "null") {
    avatar = `${filePrefix}${chat.avatar}`;
  } else {
    avatar = defaultChatAvatar;
  }

  const createModal = new ChatsChangeAvatar({
    input: new InputField({
      type: "file",
      placeholder: "загрузите картинку",
      name: "changeChatAvatarModalInput",
    }),
    button: new Button({
      name: "avatarChatSubmit",
      label: "Отправить",
      type: "submit",
      class: "submit-button small"
    }),
    avatar: new ImageAvatar({
      avatar: avatar,
      name: chat ? (chat.title as string) : "Чат",
    }),
  });

  render(".modal-place", createModal);
  const button: HTMLElement = document.getElementById(
    "close-button"
  ) as HTMLElement;
  const modalPlace: HTMLElement = document.getElementById(
    "modal-place"
  ) as HTMLElement;
  button.addEventListener("click", function () {
    modalPlace.textContent = "";
  });

  store.on(StoreEvents.Updated, function () {
    const newchat: ChatsProps = store.getState().chat as ChatsProps;
    createModal.children.avatar.setProps({
      avatar: `${filePrefix}${newchat.avatar}`,
    });
  });
}
