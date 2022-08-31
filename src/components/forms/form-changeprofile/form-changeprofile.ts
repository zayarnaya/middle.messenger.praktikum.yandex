import { Form } from "../form";
import { FormProps } from "../../../types";
import changeProfile from "./form-changeprofile.hbs";
import "./form-changeprofile.scss";
import { UserProfileController } from "../../../utils/controllers/userProfileController";
import store from "../../../utils/store";

export class ChangeUserProfile extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    Object.values(propsAndChildren.inputList.children).forEach((child) => {
      child.isValid = "true";
    });

    this.events = {
      submit: (e: Event) => {
        e.preventDefault();
        const form: HTMLFormElement = document.querySelector("form.form-changeprofile") as HTMLFormElement;
        const inputs: NodeList = form.querySelectorAll("input") as NodeList;
        console.log(form.querySelectorAll("input"));
        let submitData: {
          first_name: string,
          second_name: string,
          display_name: string,
          login: string,
          email: string,
          phone: string
        } = {};
        inputs.forEach(input => {
          let name = input.attributes.id.value;
          let val = input.value;
          submitData[name] = val;
        });
        console.log(JSON.stringify(submitData));
        const submitChange = new UserProfileController;
        submitChange.changeProfile(JSON.stringify(submitData))
        .then(response => {
          if(response.status == 200) {
            let adata = JSON.parse(response.response);
            console.log(adata);
            store.set("user", adata);
            Object.entries(adata).forEach(entry => {

              localStorage.setItem(`user_${entry[0]}`, entry[1] as string);
            });
          } else {
            console.log(response.status, response.response);
          }
        });

      }
    };

    this.eventTarget = "form.form-changeprofile";
  }

  public render() {
    return this.compile(changeProfile, {});
  }
}
