import { Form } from "../form";
import changeProfile from "./form-changeprofile.hbs";
import "./form-changeprofile.scss";
export class ChangeUserProfile extends Form {
    constructor(propsAndChildren: Record<string, any>) {
        super("div", propsAndChildren);
    }

    render() {
        return this.compile(changeProfile, {});
    }
}
