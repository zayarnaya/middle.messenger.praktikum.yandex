import { data } from "../../../data";
import { formChangePass } from "./form-changepass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { avatarChange } from "../../avatars/change-avatar/change-avatar";
import { passValidator } from "../../../utils/validator/passValidator";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import { render } from "../../../utils/renderDOM";


export function changePassPage() {
    let inputs = Object.values(data.input.change_signin);
    let theChildren = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        let obj = { [key]: new InputField(val) };


        Object.assign(theChildren, obj);

    }

    Object.assign(theChildren, { avatar: new avatarChange(data) });
    Object.assign(theChildren, { button: new Button(data.button.changeSubmit) });

    layout_wideForm();
    const form = new formChangePass(theChildren);
    render(".wrapper-all-center", form);
    passValidator("change_signin");

}
