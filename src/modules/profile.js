import {data} from "./../data.js";

import {layout_wideForm} from "./../layouts/wide-form/wide-form.js";
import myProfile from "./../components/forms/my-profile/my-profile.hbs";


import profile_avatar from "./../components/avatars/profile_avatar/profile-avatar.hbs";
import profile_char from "./../components/profile-chars/profile-char/profile-char.hbs";

const Handlebars = require('handlebars');

Handlebars.registerPartial('profile-char', profile_char);
Handlebars.registerPartial('profile_avatar', profile_avatar);

export function ProfilePage() {
    layout_wideForm();
    document.querySelector('.wrapper-all-center').innerHTML = myProfile(data);
}
