import { data } from "../../../data";
import { formChangePass } from "./form-changepass";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { passValidator } from "../../../utils/validator/passValidator";
import { layout_wideForm } from "../../../layouts/wide-form/wide-form";
import { render } from "../../../utils/renderDOM";
import { MultiList } from "../../multi-list/multi-list";

export function changePassPage() {
    let inputs = Object.values(data.input.change_signin);
    
    let inputsList = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        inputsList[key] = new InputField(val);
    }

    layout_wideForm();
    const form = new formChangePass({
        avatar: new AvatarChange(data),
        button: new Button(data.button.changeSubmit),
        inputList: new MultiList(inputsList, "div", "form-changeprofile__form-wrapper")
    });
    render(".wrapper-all-center", form);
    passValidator("change_signin");

}
