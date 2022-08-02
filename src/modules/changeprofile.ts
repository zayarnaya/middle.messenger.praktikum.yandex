import Handlebars from "handlebars";
import { data } from "../data";

import { layout_wideForm } from "../layouts/wide-form/wide-form.js";
import changeProfile from "./../components/forms/form-changeprofile/form-changeprofile.hbs";
import change_avatar from "../components/avatars/change-avatar/_index.js";
import input from "../components/input/_index.js";
import buttonSubmit from "../components/buttons/button-submit/index.js";
import profileChar from "../components/profile-chars/profile-char/index.js";
import "./../components/forms/form-changeprofile/form-changeprofile.scss";

export function changeProfilePage() {
  layout_wideForm();
  document.querySelector(".wrapper-all-center").innerHTML = changeProfile(data);
}
