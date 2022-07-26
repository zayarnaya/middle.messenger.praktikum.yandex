import Handlebars from "handlebars";
import { data } from "./../data.js";

import { layout_narrowForm } from "./../layouts/narrow-form/narrow-form.js";
import formSignin from "./../components/forms/form-signin/form-signin.hbs";

import buttonSubmit from "../components/buttons/button-submit/index.js";
import input from "./../components/input/index.js";
import "./../components/forms/form-signin/form-signin.scss";

export function signinPage() {
  layout_narrowForm();
  document.querySelector(".form-wrapper").innerHTML = formSignin(data);
}
