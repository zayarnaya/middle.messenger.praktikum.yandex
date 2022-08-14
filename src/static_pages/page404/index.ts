import { data } from "../../data";
import { Error } from "../error";
import { render } from "../../utils/renderDOM";
import "./../error.scss";

export function error404() {
  const error = new Error(data.errors[404]);
  render(".messenger-wrapper", error);
}
