import Handlebars from "handlebars";
import * as styles from "./profile-avatar.scss";
import tmpl from "./profile-avatar.hbs";

Handlebars.registerPartial("profile_avatar", tmpl);

export default (data) => {
    return tmpl(data);
}
