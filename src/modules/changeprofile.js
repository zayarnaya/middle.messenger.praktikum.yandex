import {data} from "./../data.js";

import {layout_wideForm} from "./../layouts/wide-form/wide-form.js";
import changeProfile from "./../components/forms/form-changeprofile/form-changeprofile.hbs";

import change_avatar from "./../components/avatars/change-avatar/change-avatar.hbs";
import profile_char from "./../components/profile-chars/profile-char/profile-char.hbs";

const Handlebars = require('handlebars');

Handlebars.registerPartial('profile-char', profile_char);
Handlebars.registerPartial('change-avatar', change_avatar);

export function changeProfilePage() {
    layout_wideForm();
    document.querySelector('.wrapper-all-center').innerHTML = changeProfile(data);
}
