import { data } from "../../../data";
import { formChangePass } from "./form-changepass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { passValidator } from "../../../utils/validator/passValidator";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import { render } from "../../../utils/renderDOM";
import { MultiList } from "../../multi-list/multi-list";
import { InputFieldProps } from "../../../types";

export function changePassPage() {
    let inputs: InputFieldProps[] = Object.values(data.input.change_signin);
    
    let inputsList = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        inputsList[key] = new InputField({
            name: val.name,
            type: val.type,
            label: val.label,
            required: val.required,
            placeholder: val.placeholder,
        });
    }

    layoutWideForm();
    const form = new formChangePass({
        avatar: new AvatarChange({
            avatar: data.user.avatar
        }),
        button: new Button(data.button.changeSubmit),
        inputList: new MultiList(inputsList, "div", "form-changeprofile__form-wrapper")
    });
    render(".wrapper-all-center", form);
    passValidator("change_signin");

}
