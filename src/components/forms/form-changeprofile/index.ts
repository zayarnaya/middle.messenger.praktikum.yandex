import { ChangeUserProfile } from "./form-changeprofile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { MultiList } from "../../multi-list/multi-list";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import "./form-changeprofile.scss";
import { MultiListProps } from "../../../types";
import { FormChangeAvatar } from "../form-changeavatar/form-changeavatar";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";

export function changeProfilePage() {
  let inputs: HTMLInputElement[] = Object.values(data.input.change_profile);
  let theChildren: MultiListProps = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
      return theChildren;
   }, {});

  layoutWideForm();
  const avatar = new FormChangeAvatar({
    avatar: new ImageAvatar({
      avatar: "https://www.fillmurray.com/g/100/100",
      name: "Мой аватар"
    }),
    input: new InputField({
      name: "avatar",
      type: "file",
      label: "загрузите новый аватар",
      accept: "image/*"
    }),
    button: new Button({
      name: "submit-avatar",
      label: "Отправить",
      type: "submit"
    })
  });


  const form = new ChangeUserProfile({
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(theChildren, "div", ""),
  });
  
  //render(".wrapper-all-center", form);
  render(".form__placeholder", form);
  render(".avatar__placeholder", avatar);
}
