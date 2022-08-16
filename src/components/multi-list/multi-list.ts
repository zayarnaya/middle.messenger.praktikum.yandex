import Handlebars from "handlebars";
import multiList from "./multi-list.hbs";
import { Block } from "../../utils/block";
import { MultiListProps } from "../../types";

export class MultiList extends Block<MultiListProps, MultiList> {
  public constructor(children: MultiListProps, tag: string, classname: string) {
    super(tag, children, false, classname);
  }

  public render() {
    let vals = [];
    Object.values(this.children).forEach((child) => {
      vals.push(child._id);
    });

    return this.compile(
      Handlebars.compile(multiList({ vals: vals })),
      this.props
    );
  }
}
