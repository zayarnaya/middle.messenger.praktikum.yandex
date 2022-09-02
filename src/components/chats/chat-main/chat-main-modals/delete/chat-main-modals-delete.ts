import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import chatMainModalDelete from "./chat-main-modal-delete.hbs";

export class ChatsDeleteChat extends Block<ChatsModalProps, ChatsDeleteChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, (classname = "modal"));

    this.events = {
      click: () => {
        const modal: HTMLElement = document.getElementById(
          "modal-place"
        ) as HTMLElement;
        modal.textContent = "";
      },
    };

    this.eventTarget = "#close-button";
  }

  public render() {
    return this.compile(chatMainModalDelete, this.props);
  }
}
