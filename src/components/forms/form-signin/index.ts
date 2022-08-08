
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import { data } from "../../../data";

import { signinFormAll } from "./form-signin";
import "./form-signin.scss";
import { render } from "../../../utils/renderDOM";
import { inputError } from "../../../utils/validator/input-error";

export function signinForm() {
    let inputs = Object.values(data.input.signin);
    let theChildren = {};
    //let keys = [];
    for (let i = 0; i < inputs.length; i++) {
        let key = `input${i}`;
        let val = inputs[i];
        //let id = inputs[i].id;
        /*
        Object.assign(val, {events:
        {
            blur: function() {
                inputError(id, true);
              },
    
            focus: function() {
                inputError(id, false);
              },
        }});
        */

        Object.assign(val, {events: {
            blur: function() {
                console.log('blur');
                inputError(this, true);
              },
    
            focus: function() {
                console.log('focus');
                inputError(this, false);
              },}});

        let obj = { [key]: new InputField(val) };


        Object.assign(theChildren, obj);

    }
    //console.log(inputs);
    Object.assign(theChildren, { button: new Button(data.button.signinSubmit) });
    /*Object.assign(theChildren, {events:
        {
            blur: function() {
                console.log('blur');
                inputError(this, true);
              },
    
            focus: function() {
                console.log('focus');
                inputError(this, false);
              },}});*/

    const form = new signinFormAll(theChildren);
    render(".messenger-wrapper", form);
    


}
