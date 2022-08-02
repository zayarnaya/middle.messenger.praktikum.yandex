/*
const Handlebars = require("handlebars");
import "./button-submit.scss";
//import tmpl from "./button-submit.hbs";
import buttonSubmit from "./button-submit.hbs";
import { Block } from "../../../utils/block";
import { EventBus } from "../../../utils/event-bus";
import { Button } from "./button";

export 
*/
const Handlebars = require("handlebars");
import "./button-submit.scss";
//import tmpl from "./button-submit.hbs";
import buttonSubmit from "./button-submit.hbs";

Handlebars.registerPartial("submit-button", buttonSubmit);

export = (data) => {
    return buttonSubmit(data);
}

