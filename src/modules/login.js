import { data } from "./../data.js";

import { layout_narrowForm } from "./../layouts/narrow-form/narrow-form.js";
import formLogin from "./../components/forms/form-login/form-login.hbs";

import button from "./../components/buttons/button-submit/button-submit.hbs";
import input from "./../components/input/input-field.hbs";
import "./../components/forms/form-login/form-login.scss";

const Handlebars = require("handlebars");

Handlebars.registerPartial("submit-button", button);
Handlebars.registerPartial("input-row", input);

export function loginPage() {
  layout_narrowForm();
  document.querySelector(".form-wrapper").innerHTML = formLogin(data);
}
