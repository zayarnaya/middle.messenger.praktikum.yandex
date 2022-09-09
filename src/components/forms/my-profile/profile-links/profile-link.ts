
import { MenuItemProps } from "../../../../types";
import { Block } from "../../../../utils/block";
import profileLink from "./profile-link.hbs";


export class ProfileLink extends Block<ProfileLink> {
  public constructor(props: MenuItemProps) {
    super("div", props);
    if(!!props.events) {
      this.events = props.events;
      this.eventTarget = "a";
    }
  }

  public render() {
    return this.compile(profileLink , this.props);
  }
}
