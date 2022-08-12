import formSearch from "./form-search.hbs";
import { Form } from "../form";

export class SearchForm extends Form {
    render() {
        return this.compile(formSearch, {});
  }
}
