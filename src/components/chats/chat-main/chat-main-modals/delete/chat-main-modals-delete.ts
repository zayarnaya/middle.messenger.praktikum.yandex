import { ChatsModalProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";

import chatMainModalDelete from "./chat-main-modal-delete.hbs";


export class ChatsDeleteChat extends Block<ChatsModalProps, ChatsDeleteChat> {
  public constructor(props: ChatsModalProps, classname?: string) {
    super("div", props, false, classname = "modal");

  }

  public render() {
    return this.compile(chatMainModalDelete, this.props);
  }
}
