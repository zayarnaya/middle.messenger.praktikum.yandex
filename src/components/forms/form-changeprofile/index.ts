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

export function changeProfilePage() {
  let inputs: HTMLInputElement[] = Object.values(data.input.change_profile);
  let theChildren: MultiListProps = {};

  for (let i = 0; i < inputs.length; i++) {
    let key = `input${i}`;
    let val = inputs[i];
    theChildren[key] = new InputField(val);
  }

  layoutWideForm();
  const form = new ChangeUserProfile({
    avatar: new AvatarChange({
      avatar: data.user.avatar,
    }),
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(theChildren, "div", ""),
  });
  
  render(".wrapper-all-center", form);
}
