import { Block } from "../../utils/block";
import { submitValidation } from "../../utils/validator/submit-error";
import { FormProps } from "../../types";
export class Form extends Block<FormProps, Form> {
    public constructor(formname: string, props: FormProps, tag?: string, classname?: string) {
        super(tag, props, false, classname);
        this.events = {
          submit: function(e: Event) {
            e.preventDefault();
            submitValidation();
            },          
        };
        this.eventTarget = "form";        
      }
}
