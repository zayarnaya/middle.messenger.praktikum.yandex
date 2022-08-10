import { Form } from "../form";
import myProfile from "./my-profile.hbs";

import "./my-profile.scss";


export class myUserProfile extends Form {
    constructor(propsAndChildren: Record<string, any>) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(myProfile, {});
    }
}
