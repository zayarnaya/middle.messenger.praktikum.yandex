import formSearch from "./form-search.hbs";
import { Form } from "../form";
import { FormProps } from "../../../types";

export class SearchForm extends Form {
  public constructor(props: FormProps) {
    super("search", props);
  }
  
  public render() {
        return this.compile(formSearch, {});
  }
}
