import Handlebars from "handlebars";
import { data } from "../data.js";

import { layout_narrowForm } from "../layouts/narrow-form/narrow-form.js";
import formLogin from "./../components/forms/form-login/form-login.hbs";
import buttonSubmit from "../components/buttons/button-submit/index.js";
import input from "../components/input/index.js";
import "./../components/forms/form-login/form-login.scss";

export function loginPage() {
  layout_narrowForm();
  document.querySelector(".form-wrapper").innerHTML = formLogin(data);
}
