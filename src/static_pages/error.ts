import error from "./error.hbs";
import "./error.scss";
import { Block } from "../utils/block";
import { ErrorProps } from "../types";

export class Error extends Block<ErrorProps, Error> {
  public constructor(props: ErrorProps) {
    super("div", props, false, "error center-center");
  }

  public render() {
    return this.compile(error, this.props);
  }
}
