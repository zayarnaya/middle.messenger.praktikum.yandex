import Handlebars from "handlebars";
import tmpl from "./input-field.hbs";
import * as styles from "./input-field.scss";

Handlebars.registerPartial("input-row", tmpl);

export default (data) => {
    return (tmpl(data));
}
