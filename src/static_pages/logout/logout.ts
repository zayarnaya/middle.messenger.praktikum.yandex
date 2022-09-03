import logoutPage from "./logout.hbs";
import { Block } from "../../utils/block";
import { LogoutProps } from "../../types";

export default class Logout extends Block<Logout> {
  public constructor(props: LogoutProps) {
    super("div", props);
  }

  public render() {
    return this.compile(logoutPage, this.props);
  }
}
