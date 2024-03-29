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
  type Inputs = {
    name: string;
    type: "text" | "email" | "tel" | "file" | "password" | "search";
    label: string;
    required: boolean;
    value: string;
  };
  let inputDummy: Record<string, Inputs> = data.input.change_profile;
  Object.entries(inputDummy).forEach((entry) => {
    let newvalue = localStorage.getItem(`user_${entry[0]}`);
    if (entry[0] == "display_name" && newvalue == "null") {
      let name = localStorage.getItem("user_first_name");
      let surname = localStorage.getItem("user_second_name");
      newvalue = `${name} ${surname}`;
    }
    entry[1].value = newvalue;
  });

  let inputs: Inputs[] = Object.values(inputDummy);
  let theChildren: MultiListProps = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
    return theChildren;
  }, {});

  layoutWideForm();

  const avatar = new FormChangeAvatar({
    avatar: new ImageAvatar({
      avatar:
        localStorage.getItem("user_avatar") == "null"
          ? defaulAvatar
          : `${filePrefix}${localStorage.getItem("user_avatar")}`,
      name: "Мой_аватар",
      text: "Поменять аватар",
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
      class: "submit-button small",
    }),
  });

  const form = new ChangeUserProfile({
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(theChildren, "div", ""),
  });

  render(".form__placeholder", form);
  render(".avatar__placeholder", avatar);
}
