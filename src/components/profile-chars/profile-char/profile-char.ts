
import { Block } from "../../../utils/block";
import profileChar from "./profile-char.hbs";
import { ProfCharProps } from "../../../types";
import "./profile-char.scss";

export class ProfChar extends Block<ProfCharProps, ProfChar> {
    public constructor(props: ProfCharProps) {
      super("div", props, false);
    }
  
    public render() {
          return this.compile(profileChar, this.props);
    }
}
