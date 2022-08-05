import { Block } from "../../../utils/block";
import formSearch from "./form-search.hbs";

export class searchForm extends Block {
    render() {
        return formSearch();
  }
}
