import { Block } from "../../../../utils/block";
import chatMainLayout from "./chat-main-layout.hbs";
import { ChatRightPanelLayoutProps } from "../../../../types";
import { gotoChat } from "../../../../utils/gotoChat";
import { isEmpty } from "../../../../utils/minor-functions/isEmpty";
import { pageRouter } from "../../../../utils/render";

export class ChatRightPanelLayout extends Block<
  ChatRightPanelLayoutProps,
  ChatRightPanelLayout
> {
  public constructor(
    tag: string,
    props: ChatRightPanelLayoutProps,
    classname?: string
  ) {
    super(tag, props, false, classname);
    /*
    this.events = {
      hashchange: function() {
        if(document.location.pathname.includes("chats")) {
          let chatIDIndex = document.location.pathname.indexOf("chats") as number;
          chatIDIndex += 6;
          let chatID = Number(document.location.pathname.slice(chatIDIndex));
          if(!!isEmpty(chatID)) {
            pageRouter();
          }
          gotoChat(chatID);
        } else if (!document.location.pathname.includes("chats")) {
          pageRouter();
        }
      }
    }

    this.eventTarget = "document";
    */
  }

  public render() {
    return this.compile(chatMainLayout, this.props);
  }
}
