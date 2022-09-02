import { Block } from "../../../utils/block";
import changeAvatar from "./change-avatar.hbs";
import "./change-avatar.scss";
import { AvatarProps } from "../../../types";

export class AvatarChange extends Block<AvatarChange> {
  public constructor(props: AvatarProps) {
    super("div", props, false);
  }

  public render() {
    return this.compile(changeAvatar, this.props);
  }
}
