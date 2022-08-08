import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { profAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { profChar } from "../../profile-chars/profile-char/profile-char";
import myProfile from "./my-profile.hbs";

import "./my-profile.scss";


export class myUserProfile extends Block {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);
        //this.events = propsAndChildren.events;
    }

    render() {
        console.log("RENDER MYUSERPROFILE");
        //return this.compile(formSignin, this.children);
        return this.compile(myProfile, {});
    }
}
