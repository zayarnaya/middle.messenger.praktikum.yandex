import { Block } from "../../utils/block";
//import inputRow = require("../input/input-field");
//import buttonSubmit = require("../buttons/button-submit/button");
//import formSignin = require("./form-signin/form-signin.hbs");
//import { formLogin } from "./form-login.hbs";
//const Handlebars = require("handlebars");
//import buttonSubmit from "../buttons/button-submit/index";
//import inputRow  from "../input/index";


export class Form extends Block {
    constructor(props, forming) {
        // Создаём враппер дом-элемент button
    super("div", props);
    //this.form_Name = formName;
    this.forming = forming;
    this.props = props;
  }

  render() {
    //console.log('tmpl', tmpl);
    //return (typeof forming);
    //return Handlebars.compile(this.forming);
    //Handlebars.registerPartial("submit-button", buttonSubmit);
    //Handlebars.registerPartial("input-row", inputRow);
    return this.forming;
  }
}
