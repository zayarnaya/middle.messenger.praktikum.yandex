import Handlebars from "handlebars";
import { data } from "./../data.js";

import { layout_wideForm } from "../layouts/wide-form/wide-form.js";
import myProfile from "./../components/forms/my-profile/my-profile.hbs";
import profile_avatar from "../components/avatars/profile_avatar/index.js";
import profile_char from "./../components/profile-chars/profile-char/profile-char.hbs";
import "./../components/forms/my-profile/my-profile.scss";

Handlebars.registerPartial("profile-char", profile_char);

export function ProfilePage() {
  layout_wideForm();
  document.querySelector(".wrapper-all-center").innerHTML = myProfile(data);
}
