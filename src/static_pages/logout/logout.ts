import Handlebars from "handlebars";
import { compile } from "handlebars";
import logoutPage from "./logout.hbs";

import { Block } from "../../utils/block";

export default class Logout extends Block {
  constructor(props) {
        // Создаём враппер DOM-элемент button
    super("div", props);
  }
  

  render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
    //return compile(logoutPage, this.props);
    return logoutPage(this.props);
  }
} 



/*
import logoutPage from "./__logout.hbs";
import { Block } from "../../utils/block";

export class Logout extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return logoutPage(this.props);
  }
}*/
