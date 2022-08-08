import { data } from "../../../data";
import { Block } from "../../../utils/block";
import { Button } from "../../buttons/button-submit/button";
import { InputField } from "../../input/input-field";
import formSignin from "./form-signin.hbs";

import "./form-signin.scss";


export class signinFormAll extends Block {
    constructor(propsAndChildren) {
        super("div", propsAndChildren);
        //this.events = propsAndChildren.events;
    }

    render() {

        //return this.compile(formSignin, this.children);
        return this.compile(formSignin, {});
    }
}



/*
const Handlebars = require("handlebars");
import { data } from "../../../data";
import formSignin from "./form-signin.hbs";
//import inputRow = require("../../input/input-field");
//import buttonSubmit = require("../../buttons/button-submit/button");
import buttonSubmit from "../../buttons/button-submit/index";
import inputRow  from "../../input/index";
import "./form-signin.scss";

import { Form } from "../form";

export const btn = Handlebars.registerPartial("submit-button", buttonSubmit);
export const inp = Handlebars.registerPartial("input-row", inputRow);

//работает
export const signinForm = new Form(data, formSignin(data));
*/
