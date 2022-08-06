const Handlebars = require("handlebars");
import "./button-submit.scss";
//import tmpl from "./button-submit.hbs";
import buttonSubmit from "./button-submit.hbs";
import { Block } from "./../../../utils/block";
//import { EventBus } from "./../../../utils/event-bus";



////не понимаю как класс встроить внутрь собираемой формы
//Handlebars.registerPartial("submit-button", buttonSubmit);

export class Button extends Block {//класс экспортировали, а что с ним дальше делать???
    constructor(props) {
          // Создаём враппер дом-элемент button
      super("div", props);
    }
  
    render() {
          // шаблон
          Handlebars.registerPartial("submit-button", buttonSubmit);
          return buttonSubmit(this.props);
    }
  }
  
  /*
  function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
        block.dispatchComponentDidMount();
    return root;
  }
  
  const button = new Button({
          text: 'Click me',
  });
  */
  
  /*
  // app — это class дива в корне DOM
  render(".app", button);
  
  // Через секунду контент изменится сам, достаточно обновить пропсы
  setTimeout(() => {
    button.setProps({
      text: 'Click me, please',
    });
  }, 1000);
  */
