import formSearch from "./form-search.hbs";
import { Form } from "../form";

export class searchForm extends Form {
    render() {
        return this.compile(formSearch, {});
  }
}
