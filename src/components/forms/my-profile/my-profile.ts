import { Block } from "../../../utils/block";
import myProfile from "./my-profile.hbs";
import "./my-profile.scss";

export class MyUserProfile extends Block {
    constructor(propsAndChildren: Record<string, any>) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(myProfile, {});
    }
}
