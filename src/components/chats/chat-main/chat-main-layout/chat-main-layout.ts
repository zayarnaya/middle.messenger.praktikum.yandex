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

  }

  public render() {
    return this.compile(chatMainLayout, this.props);
  }
}
