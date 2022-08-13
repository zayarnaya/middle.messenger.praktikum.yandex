import { Block } from "../../../utils/block";
import profileAvatar from "./profile-avatar.hbs";
import "./profile-avatar.scss";
import { AvatarProps } from "../../../types";

export class ProfAvatar extends Block<AvatarProps, ProfAvatar> {
    public constructor(props: AvatarProps) {
      super("div", props, false);
    }
  
    public render() {
          return this.compile(profileAvatar, this.props);
    }
  }

