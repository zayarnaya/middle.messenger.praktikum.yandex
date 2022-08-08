import { data } from "../../data";
import error from "../error.hbs";

import "./../error.scss";
import { Block } from "../../utils/block";
import { EventBus } from "../../utils/event-bus";
import { Error } from "..";
import { render } from "../../utils/renderDOM";

export function error500() {
 const error = new Error(data.errors[500]);
 render(".messenger-wrapper", error);
}
