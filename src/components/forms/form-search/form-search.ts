import formSearch from "./form-search.hbs";
import { FormProps } from "../../../types";
import { Block } from "../../../utils/block";

export class SearchForm extends Block<FormProps, SearchForm> {
  public constructor(props: FormProps) {
    super("search", props);
  }

  public render() {
    return this.compile(formSearch, {});
  }
}
