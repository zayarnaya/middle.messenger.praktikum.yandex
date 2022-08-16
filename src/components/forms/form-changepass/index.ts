import { data } from "../../../data";
import { formChangePass } from "./form-changepass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import { render } from "../../../utils/renderDOM";
import { MultiList } from "../../multi-list/multi-list";
import { InputFieldProps } from "../../../types";

export function changePassPage() {
  let inputs: InputFieldProps[] = Object.values(data.input.change_signin);

  let inputsList = {};

  inputsList = inputs.reduce((inputsList, item, i) => {
    inputsList[`input${i}`] = new InputField(item);
      return inputsList;
   }, {});

  layoutWideForm();
  const form = new formChangePass({
    avatar: new AvatarChange({
      avatar: data.user.avatar,
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
