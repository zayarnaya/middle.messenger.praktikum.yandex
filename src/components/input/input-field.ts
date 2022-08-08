const Handlebars = require("handlebars");
import { Block } from "../../utils/block";
import { EventBus } from "../../utils/event-bus";
import inputRow from "./input-field.hbs";
//import * as styles from "./input-field.scss";
import "./input-field.scss";
import { inputError } from "../../utils/validator/input-error";


////не понимаю как класс встроить внутрь собираемой формы
//Handlebars.registerPartial("submit-button", buttonSubmit);

export class InputField extends Block {
    constructor(props) {
          // Создаём враппер дом-элемент button
      super("div", props, true);
      this.events = props.events;
    }
  
    render() {
          // шаблон
          //Handlebars.registerPartial("input-row", inputRow);
          //return inputRow(this.props);
          console.log(this.events);
          return this.compile(inputRow, this.props);
    }
  }
