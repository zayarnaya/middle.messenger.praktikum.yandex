
import logoutPage from "./logout.hbs";

import { Block } from "../../utils/block";

export default class Logout extends Block {
  constructor(props) {

    super("div", props);
  }
  

  render() {
    console.log("SSSSSSSS");
        return this.compile(logoutPage, this.props);
  }
} 
