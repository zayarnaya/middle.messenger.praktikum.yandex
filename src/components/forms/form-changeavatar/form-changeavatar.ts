import { APIurls, Methods } from "../../../types";
import { AvatarController } from "../../../utils/controllers/avatarController";
import { HTTPTransport } from "../../../utils/http-transport";
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
            submit: async (e: Event) => {
                e.preventDefault();
                const form: HTMLFormElement = document.querySelector("form.form__changeAvatar") as HTMLFormElement;
                let input: HTMLInputElement = document.querySelector("input#avatar") as HTMLInputElement;
                const submitChange = new AvatarController;
                let formdata = new FormData(form);
                //formdata.append("avatar", input.files[0]);
                console.log(formdata.get("avatar"));
                //const request = new HTTPTransport;
                submitChange.change(formdata)
                .then(response => console.log(response));


        // request.request("https://ya-praktikum.tech/api/v2/user/profile/avatar", {
        //     headers: { "Content-Type": "multipart/form-data" },
        //     method: Methods.PUT,
        //     data: new FormData(form),
        // })
        // .then(response => console.log(response));
                // const xhr = new XMLHttpRequest();
                // xhr.open("PUT", "https://ya-praktikum.tech/api/v2/user/profile/avatar");
                //submitChange.change(formdata);
                // let response = await submitChange.change(new FormData(form));
                // let result = await response;
                // console.log(response, "RESPONSE");
                // let response = await fetch(APIurls.CHANGEAVATAR, {
                //     method: 'PUT',
                //     body: new FormData(form)
                //   });
              
                //   let result = await response.json();
              
                //   alert(result.message);
                //const form: HTMLFormElement = document.querySelector("form.form__changeAvatar") as HTMLFormElement;
                //let formdata = new FormData(form);
                //let input: HTMLInputElement = document.querySelector("input#avatar") as HTMLInputElement;
                //formdata.append("avatar", input.files[0]);
                //console.log(formdata.get("avatar"));
                //console.log(form);
 
                //let file = formdata.get("file");

                //const submitChange = new AvatarController;
                //submitChange.change(new FormData(form));
                // const xhr = new XMLHttpRequest();
                // xhr.open("PUT", "http://dnsdatacheck.rq9xjxvau52dlvdk.b.requestbin.net");
                // xhr.setRequestHeader("Content-Type", "multipart/form-data");
                // xhr.withCredentials = true;
                // xhr.send(new FormData(form));
        
                // xhr.onload = function () {
                //     console.log(xhr);
                //   };




            }
        };

        this.eventTarget = "form.form__changeAvatar";

    }

    public render() {
        return this.compile(changeAvatar, this.props);
    }
}
