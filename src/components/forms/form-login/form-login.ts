const Handlebars = require("handlebars");
import { data } from "../../../data";
import formLogin from "./form-login.hbs";
//import inputRow = require("../../input/input-field");
//import buttonSubmit = require("../../buttons/button-submit/button");
import buttonSubmit from "../../buttons/button-submit/index";
import inputRow  from "../../input/index";
import "./form-login.scss";

import { Form } from "./../form";

export const btn = Handlebars.registerPartial("submit-button", buttonSubmit);
export const inp = Handlebars.registerPartial("input-row", inputRow);

//работает
export const loginForm = new Form(data, formLogin(data));


