import { ChangeUserProfile } from "./form-changeprofile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { avatarChange } from "../../avatars/change-avatar/change-avatar";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import changeProfile from "./form-changeprofile.hbs";


import "./form-changeprofile.scss";
import { validatorAll } from "../../../utils/validator/validator";


export function changeProfilePage() {
    let inputs = Object.values(data.input.change_profile);
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
    const form = new ChangeUserProfile(theChildren);
    render(".wrapper-all-center", form);
    validatorAll();
}
