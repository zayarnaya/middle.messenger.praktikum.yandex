import { ChangeUserProfile } from "./form-changeprofile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { MultiList } from "../../multi-list/multi-list";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import "./form-changeprofile.scss";


export function changeProfilePage() {
    let inputs = Object.values(data.input.change_profile);
    let theChildren = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        theChildren[key] = new InputField(val);
    }

    layout_wideForm();
    const form = new ChangeUserProfile({
        avatar: new AvatarChange(data),
        button: new Button(data.button.changeSubmit),
        inputList: new MultiList(theChildren, "div", "")
    });
    render(".wrapper-all-center", form);

}
