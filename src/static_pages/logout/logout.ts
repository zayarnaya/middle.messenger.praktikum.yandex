
import logoutPage from "./logout.hbs";

import { Block } from "../../utils/block";

export default class Logout extends Block {
  constructor(props: Record<string, any>) {

    super("div", props);
  }
  

  render() {
        return this.compile(logoutPage, this.props);
  }
} 
