import { myUserProfile } from "./my-profile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { ProfAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { profChar } from "../../profile-chars/profile-char/profile-char";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import { MultiList } from "../../multi-list/multi-list";
import "./my-profile.scss";


export function profilePage() {
    let chars = Object.values(data.profile_char);
    let theChildren = {};

    for (let i = 0; i < chars.length; i++) {
        let key = `char${i}`;
        let val = chars[i];
        theChildren[key] = new profChar(val);
    }

    layout_wideForm();
    const form = new myUserProfile({
        avatar: new ProfAvatar(data),
        charList: new MultiList(theChildren, "div", "")
    });
    render(".wrapper-all-center", form);
}
