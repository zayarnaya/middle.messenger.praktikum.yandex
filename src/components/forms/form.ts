import { Block } from "../../utils/block";
import { getData } from "../../utils/form-actions/get-data";
import { signinForm } from "./form-signin";
import formLogin from "./form-login/form-login.hbs";
import { submitError } from "../../utils/validator/submit-error";

export class Form extends Block {


    constructor(formname, props,) {

        super("div",props, false);
        this.events = {
          submit: function(e: Event) {
            e.preventDefault();
            submitError();
            },          
        };
        this.eventTarget = "form";        
      }
}
