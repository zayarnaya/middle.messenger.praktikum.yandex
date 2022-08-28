import { Form } from "../form";
import { FormProps } from "../../../types";
import changeProfile from "./form-changeprofile.hbs";
import "./form-changeprofile.scss";

export class ChangeUserProfile extends Form {
  public constructor(propsAndChildren: FormProps) {
    super(propsAndChildren, "div");
    Object.values(propsAndChildren.inputList.children).forEach((child) => {
      child.isValid = "true";
    });
    console.log(propsAndChildren, "FILE VALID");
    this.events = {
      submit: (e: Event) => {
        e.preventDefault();
        const form: HTMLFormElement = document.querySelector("form.form-changeprofile") as HTMLFormElement;
        let formdata = new FormData(form);
        let inputFile: HTMLInputElement = document.querySelector("input#avatar") as HTMLInputElement;
        if(!!inputFile.files[0]) {
          formdata.append("file", inputFile.files[0]);
        }

        console.log(formdata.get("file"));
        //console.log(form.querySelectorAll("input"));

      }
    };

    this.eventTarget = "form.form-changeprofile";
  }

  public render() {
    return this.compile(changeProfile, {});
  }
}
