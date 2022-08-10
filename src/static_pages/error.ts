import error from "./error.hbs";
import "./error.scss";
import { Block } from "../utils/block";

export class Error extends Block {
  constructor(props: Record<string, any>) {
    super ("div", props);    
  }

  render() {
    return this.compile(error, this.props);
  }
}
