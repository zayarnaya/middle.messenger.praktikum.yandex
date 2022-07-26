import Handlebars from "handlebars";
import * as styles from "./../profile_avatar/profile-avatar.scss";
import * as styles2 from "./change-avatar.scss";
import tmpl from "./change-avatar.hbs";

Handlebars.registerPartial("change-avatar", tmpl);

export default (data) => {
    return tmpl(data);
}
