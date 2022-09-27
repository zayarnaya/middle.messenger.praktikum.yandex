import error from "./error.hbs";
import "./error.scss";
import { Block } from "../utils/block";
import { ErrorProps } from "../types";
import { router } from "../consts";

export class Error extends Block<Error> {
  public constructor(props: ErrorProps) {
    super("div", props, false, "error center-center");
    this.events = {
      click: (e: Event) => {
        e.preventDefault(); 
        router.back();
      }
    }

    this.eventTarget = ".error__a-back";
  }

  public render() {
    return this.compile(error, this.props);
  }
}
