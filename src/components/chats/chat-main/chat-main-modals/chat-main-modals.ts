import { Block } from "../../../../utils/block";
import { ChatsMenuProps } from "../../../../types";
import chatMainMenu from "../chat-main-menu/chat-main-menu.hbs";

export class ChatsMenu extends Block<ChatsMenu> {
  public constructor(props: ChatsMenuProps, classname?: string) {
    super("nav", props, false, classname);
    this.events = {
      click: function () {
        const menu: HTMLElement = document.querySelector(
          "#open-menu"
        ) as HTMLElement;
        menu.classList.toggle("hidden");
      },
    };

    this.eventTarget = "#mini-menu";
  }

  public render() {
    return this.compile(chatMainMenu, this.props);
  }
}
