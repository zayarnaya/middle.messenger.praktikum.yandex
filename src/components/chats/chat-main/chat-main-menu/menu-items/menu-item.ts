import { MenuItemProps } from "../../../../../types";
import { Block } from "../../../../../utils/block";
import menuItem from "./menu-item.hbs";
import "./menu-item.scss";

export class MenuItem extends Block<MenuItem> {
  public constructor(props: MenuItemProps) {
    super("li", props, false, props.classname);
    if (!!props.events) {
      this.events = props.events;
      this.eventTarget = "button";
    }
  }

  public render() {
    return this.compile(menuItem, this.props);
  }
}
