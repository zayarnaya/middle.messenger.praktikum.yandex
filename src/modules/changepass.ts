//import Handlebars from "handlebars";
const Handlebars = require("handlebars");
import { data } from "../data";

import { layout_wideForm } from "../layouts/wide-form/wide-form.js";
import changePass from "./../components/forms/form-changepass/form-changepass.hbs";
import changeAvatar from "../components/avatars/change-avatar/index";
import inputRow from "../components/input/index";
import buttonSubmit from "../components/buttons/button-submit/index";
import "./../components/forms/form-changepass/form-changepass.scss";

console.log(typeof changePass);
console.log(typeof changeAvatar);
console.log(typeof inputRow);
console.log(typeof buttonSubmit);
export function changePassPage() {
  layout_wideForm();
  document.querySelector(".wrapper-all-center").innerHTML = changePass(data);
}
