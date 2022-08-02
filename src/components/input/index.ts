//import Handlebars from "handlebars";
const Handlebars = require("handlebars");
//import inputRow = require("./input-field.hbs");
import inputRow from "./input-field.hbs";
//import * as styles from "./input-field.scss";
import "./input-field.scss";

Handlebars.registerPartial("input-row", inputRow);

export = (data) => {
    return (inputRow(data));
}
