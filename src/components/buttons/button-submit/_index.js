import Handlebars from "handlebars";
import * as styles from "./button-submit.scss";
import tmpl from "./button-submit.hbs";

Handlebars.registerPartial("submit-button", tmpl);

export default (data) => {
    return tmpl(data);
}
