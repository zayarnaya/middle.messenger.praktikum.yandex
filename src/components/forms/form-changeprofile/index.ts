import { ChangeUserProfile } from "./form-changeprofile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { MultiList } from "../../multi-list/multi-list";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import "./form-changeprofile.scss";
import { MultiListProps } from "../../../types";
import { FormChangeAvatar } from "../form-changeavatar/form-changeavatar";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import { defaulAvatar, filePrefix } from "../../../consts";

export function changeProfilePage() {
  let inputDummy = data.input.change_profile;
  Object.entries(inputDummy).forEach((entry) => {
    let newvalue = localStorage.getItem(`user_${entry[0]}`);
    if (entry[0] == "display_name" && newvalue == "null") {
      let name = localStorage.getItem("user_first_name");
      let surname = localStorage.getItem("user_second_name");
      newvalue = `${name} ${surname}`;
    }

    entry[1].value = newvalue;
  });

  let profileAvatar: string;
  let avatarRaw: string | null = localStorage.getItem(`user_avatar`)
    ? localStorage.getItem(`user_avatar`)
    : "";

  if (avatarRaw == "null") {
    profileAvatar = defaulAvatar;
  } else if (avatarRaw != "null") {
    profileAvatar = `${filePrefix}${avatarRaw}`;
  } else if (avatarRaw.length == 0) {
    profileAvatar = defaulAvatar;
  }

  let inputs: HTMLInputElement[] = Object.values(inputDummy);
  let theChildren: MultiListProps = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
    return theChildren;
  }, {});

  layoutWideForm();

  const avatar = new FormChangeAvatar({
    avatar: new ImageAvatar({
      avatar: profileAvatar,
      name: "Мой аватар",
    }),
    input: new InputField({
      name: "avatar",
      type: "file",
      label: "загрузите новый аватар",
    }),
    button: new Button({
      name: "submit-avatar",
      label: "Отправить",
      type: "submit",
    }),
  });

  const form = new ChangeUserProfile({
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(theChildren, "div", ""),
  });

  render(".form__placeholder", form);
  render(".avatar__placeholder", avatar);
}
