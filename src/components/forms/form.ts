import { Block } from "../../utils/block";
import { submitValidation } from "../../utils/validator/submit-error";

export class Form extends Block {
    constructor(formname: string, props: Object, tag?: string, classname?: string) {
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
