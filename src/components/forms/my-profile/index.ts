import { myUserProfile } from "./my-profile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { profAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { profChar } from "../../profile-chars/profile-char/profile-char";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import "./my-profile.scss";


export function ProfilePage() {
    let chars = Object.values(data.profile_char);
    let theChildren = {};

    for (let i = 0; i < chars.length; i++) {
        let key = `char${i}`;
        let val = chars[i];
        let obj = { [key]: new profChar(val) };


        Object.assign(theChildren, obj);

    }

    Object.assign(theChildren, { avatar: new profAvatar(data) });

    layout_wideForm();
    const form = new myUserProfile(theChildren);
    render(".wrapper-all-center", form);
}
