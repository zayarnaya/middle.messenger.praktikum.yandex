import { data } from "../../data";
import error from "../error.hbs";
//import template = require("./../error.hbs");
import "./../error.scss";
import { Block } from "../../utils/block";
import { EventBus } from "../../utils/event-bus";
import { Error } from "..";

export const error500 = new Error(data.errors[500]);
