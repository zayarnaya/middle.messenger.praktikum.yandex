import chatMainInner from "./chat-main-inner.hbs";
import { Block } from "../../../../utils/block";
import { ChatsInnerFieldProps } from "../../../../types";

export class ChatsInnerField extends Block<
  ChatsInnerFieldProps,
  ChatsInnerField
> {
  public constructor(
    tag: string,
    props: ChatsInnerFieldProps,
    classname?: string
  ) {
    super(tag, props, false, classname);
  }

  public render() {
    return this.compile(chatMainInner, this.props);
  }
}
