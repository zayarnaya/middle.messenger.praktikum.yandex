import { data } from "../../../data";
import { formChangePass } from "./form-changepass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import { render } from "../../../utils/renderDOM";
import { MultiList } from "../../multi-list/multi-list";
import { InputFieldProps } from "../../../types";
import { defaulAvatar, filePrefix } from "../../../consts";
import { ProfAvatar } from "../../avatars/profile_avatar/profile-avatar";

export function changePassPage() {
  let inputs: InputFieldProps[] = Object.values(data.input.change_signin);

  let inputsList = {};

  inputsList = inputs.reduce((inputsList, item, i) => {
    inputsList[`input${i}`] = new InputField(item);
      return inputsList;
   }, {});

  let userAvatar = localStorage.getItem("user_avatar");
  let avatarRaw = userAvatar
  ? userAvatar
  : "";
  let profileAvatar: string;
  if(avatarRaw == "null" || avatarRaw == "") {
    profileAvatar = defaulAvatar;
  } else if (!!avatarRaw) {
    profileAvatar = `${filePrefix}${avatarRaw}`;
  }

  layoutWideForm();
  const form = new formChangePass({
    avatar: new ProfAvatar({
      avatar: profileAvatar,
    }),
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(
      inputsList,
      "div",
      "form-changeprofile__form-wrapper"
    ),
  });

  render(".wrapper-all-center", form);
}
