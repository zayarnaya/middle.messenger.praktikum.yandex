import { Block } from "../../../../utils/block";
import chatMainMenu from "./chat-main-menu.hbs";
import { ChatsMenuProps } from "../../../../types";
import "./chat-main-menu.scss";

export class ChatsMenu extends Block<ChatsMenu> {
  public constructor(props: ChatsMenuProps, classname?: string) {
    super("nav", props, false, classname);
    this.events = {
      click: function () {
        let menu: HTMLElement = document.querySelector(
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
