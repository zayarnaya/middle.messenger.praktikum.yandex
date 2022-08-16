import { data } from "../../data";
import "./../error.scss";
import { Error } from "../error";
import { render } from "../../utils/renderDOM";

export function error500() {
  const error = new Error(data.errors[500]);
  render(".messenger-wrapper", error);
}
