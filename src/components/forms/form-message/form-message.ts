import { Form } from "../form";
import sendMessageForm from "./form-message.hbs";

export class FormMessage extends Form {
    constructor(props, classname?: string) {
        super(props, classname);
    }

    render() {
        return this.compile(sendMessageForm, {})
    }


}
