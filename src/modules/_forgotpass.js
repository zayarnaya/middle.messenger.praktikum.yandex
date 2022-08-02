import Handlebars from "handlebars";
import { data } from "../data.js";

import { layout_narrowForm } from "../layouts/narrow-form/narrow-form.js";
import formGetNewPass from "./../components/forms/form-forgotpass/form-forgotpass.hbs";
import buttonSubmit from "../components/buttons/button-submit/index.js";
import input from "../components/input/index.js";
import "./../components/forms/form-forgotpass/form-forgotpass.scss";

export function forgotPassPage() {
  layout_narrowForm();
  document.querySelector(".form-wrapper").innerHTML = formGetNewPass(data);
}
