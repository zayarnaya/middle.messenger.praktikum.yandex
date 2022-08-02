const Handlebars = require("handlebars");
import "./../profile_avatar/profile-avatar.scss";
import "./change-avatar.scss";
import changeAvatar from "./change-avatar.hbs";
console.log(typeof changeAvatar, '444');
Handlebars.registerPartial("change-avatar", changeAvatar);

export = (data) => {
    return changeAvatar(data);
}
