import {data} from "./../data.js";

import {layout_wideForm} from "./../layouts/wide-form/wide-form.js";
import changePass from "./../components/forms/form-changepass/form-changepass.hbs";

import change_avatar from "./../components/avatars/change-avatar/change-avatar.hbs";
import input from "./../components/input/input-field.hbs";
import button from "./../components/buttons/button-submit/button-submit.hbs";

const Handlebars = require('handlebars');

Handlebars.registerPartial('submit-button', button);
Handlebars.registerPartial('input-row', input);
Handlebars.registerPartial('change-avatar', change_avatar);

export function changePassPage() {
    layout_wideForm();
    document.querySelector('.wrapper-all-center').innerHTML = changePass(data);
}
