import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { profAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { profChar } from "../../profile-chars/profile-char/profile-char";
import { Form } from "../form";
import changeProfile from "./form-changeprofile.hbs";

import "./form-changeprofile.scss";


export class ChangeUserProfile extends Form {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);
        //this.events = propsAndChildren.events;
    }

    render() {

        return this.compile(changeProfile, {});
    }
}
