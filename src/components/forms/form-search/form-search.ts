import { Block } from "../../../utils/block";
import formSearch from "./form-search.hbs";
import { Form } from "../form";
import { data } from "../../../data";

export class searchForm extends Form {
    render() {
        return this.compile(formSearch, {});
  }
}
