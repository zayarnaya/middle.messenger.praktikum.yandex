const Handlebars = require("handlebars");
import "./profile-avatar.scss";
import profileAvatar from "./profile-avatar.hbs";

Handlebars.registerPartial("profile_avatar", profileAvatar);

export = (data) => {
    return profileAvatar(data);
}
