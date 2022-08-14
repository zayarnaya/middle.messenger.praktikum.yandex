import { MyUserProfile } from "./my-profile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { ProfAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { ProfChar } from "../../profile-chars/profile-char/profile-char";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import { MultiList } from "../../multi-list/multi-list";
import "./my-profile.scss";
import { ProfCharProps } from "../../../types";

export function profilePage() {
  let chars: ProfCharProps[] = Object.values(data.profile_char);
  let theChildren = {};

  for (let i = 0; i < chars.length; i++) {
    let key = `char${i}`;
    let val = chars[i];
    theChildren[key] = new ProfChar(val);
  }

  layoutWideForm();
  const form = new MyUserProfile({
    avatar: new ProfAvatar({
      avatar: data.user.avatar,
      name: data.user.profile.display_name.value,
    }),
    charList: new MultiList(theChildren, "div", "profile__chars col"),
  });
  render(".wrapper-all-center", form);
}
