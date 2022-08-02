import Handlebars from "handlebars";
import { data } from "./../data.js";

import { layout_wideForm } from "../layouts/wide-form/wide-form.js";
import changePass from "./../components/forms/form-changepass/form-changepass.hbs";
import change_avatar from "./../components/avatars/change-avatar/index.js";
import input from "../components/input/index.js";
import buttonSubmit from "../components/buttons/button-submit/index.js";
import "./../components/forms/form-changepass/form-changepass.scss";

export function changePassPage() {
  layout_wideForm();
  document.querySelector(".wrapper-all-center").innerHTML = changePass(data);
}
