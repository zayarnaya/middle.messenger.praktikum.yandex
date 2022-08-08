import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { profAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { profChar } from "../../profile-chars/profile-char/profile-char";
import changeProfile from "./form-changeprofile.hbs";

import "./form-changeprofile.scss";


export class ChangeUserProfile extends Block {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);
        //this.events = propsAndChildren.events;
    }

    render() {

        return this.compile(changeProfile, {});
    }
}
