import Handlebars from "handlebars";
import tmpl from "./profile-char.hbs";
import * as styles from "./profile-char.scss";

Handlebars.registerPartial("profile-char", tmpl);

export default (data) => {
    return tmpl(data);
}
