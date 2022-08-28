import { AvatarController } from "../../../utils/controllers/avatarController";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { Form } from "../form";
import changeAvatar from "./form-changeavatar.hbs";

type FormChangeAvatarProps = {
    avatar: ImageAvatar,
    input: InputField,
    button: Button
}

export class FormChangeAvatar extends Form {
    public constructor(props: FormChangeAvatarProps) {
        super(props);
        this.events = {
            submit: (e: Event) => {
                e.preventDefault();
                const form: HTMLFormElement = document.querySelector("form.form__changeAvatar") as HTMLFormElement;
                let formdata = new FormData(form);
                let input: HTMLInputElement = document.querySelector("input#avatar") as HTMLInputElement;
                formdata.append("avatar", input.files[0]);
 
                //let file = formdata.get("file");

                const submitChange = new AvatarController;
                submitChange.change(formdata);
            }
        };

        this.eventTarget = "form.form__changeAvatar";

    }

    public render() {
        return this.compile(changeAvatar, this.props);
    }
}
