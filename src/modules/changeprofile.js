import Handlebars from "handlebars";
import { data } from "./../data.js";

import change_avatar from "./../components/avatars/change-avatar/index.js";
import input from "../components/input/index.js";
import buttonSubmit from "../components/buttons/button-submit/index.js";
import { layout_wideForm } from "./../layouts/wide-form/wide-form.js";
import changeProfile from "./../components/forms/form-changeprofile/form-changeprofile.hbs";

import profile_char from "./../components/profile-chars/profile-char/profile-char.hbs";
import "./../components/forms/form-changeprofile/form-changeprofile.scss";

Handlebars.registerPartial("profile-char", profile_char);

export function changeProfilePage() {
  layout_wideForm();
  document.querySelector(".wrapper-all-center").innerHTML = changeProfile(data);
}
