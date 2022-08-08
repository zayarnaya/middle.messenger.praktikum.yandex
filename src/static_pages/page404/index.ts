import { data } from "../../data";
import error from "../error.hbs";
//import template = require("./../error.hbs");
import "./../error.scss";
import { Block } from "../../utils/block";
import { EventBus } from "../../utils/event-bus";
import { Error } from "..";
import { render } from "../../utils/renderDOM";


//export const error404 = new Error(data.errors[404]);

export function error404() {
 const error = new Error(data.errors[404]);
 console.log(error, "ERRORRRRR");
 render(".messenger-wrapper", error);
}
