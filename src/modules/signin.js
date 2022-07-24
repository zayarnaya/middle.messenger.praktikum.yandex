import { data } from "./../data.js";

import { layout_narrowForm } from "./../layouts/narrow-form/narrow-form.js";
import formSignin from "./../components/forms/form-signin/form-signin.hbs";

import button from "./../components/buttons/button-submit/button-submit.hbs";
import input from "./../components/input/input-field.hbs";

const Handlebars = require("handlebars");

Handlebars.registerPartial("submit-button", button);
Handlebars.registerPartial("input-row", input);

export function signinPage() {
  layout_narrowForm();
  document.querySelector(".form-wrapper").innerHTML = formSignin(data);
}
