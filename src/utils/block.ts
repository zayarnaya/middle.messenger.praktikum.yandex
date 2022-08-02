import { EventBus } from "./event-bus";

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update"
  };

_element = null;
_meta: Record<any, any> = {};
props = {};
eventBus;

/** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

constructor(tagName: string = "div", props = {}) {
  const eventBus = new EventBus();
  this._meta = {
    tagName,
    props
  };

  this.props = this._makePropsProxy(props);

  this.eventBus = () => eventBus;

  this._registerEvents(eventBus);
  eventBus.emit(Block.EVENTS.INIT);
}

_registerEvents(eventBus) {
  eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
  eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
  eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
}

_createResources() {
  const { tagName } = this._meta;
  this._element = this._createDocumentElement(tagName);
}

init() {
  this._createResources();
  this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
}

_componentDidMount() {
  this.componentDidMount();
  this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  this.eventBus().emit(Block.EVENTS.FLOW_CDU);
}

// Может переопределять пользователь, необязательно трогать
componentDidMount(oldProps?) {}

dispatchComponentDidMount() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
}

_componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
  
    if (!response) {
      return;
    }
    //this._render();
  this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
}

// Может переопределять пользователь, необязательно трогать
componentDidUpdate(oldProps, newProps) {
  return true;
}

setProps = nextProps => {
  if (!nextProps) {
    return;
  }

  Object.assign(this.props, nextProps);
};

get element() {
  return this._element;
}

_render() {
  const block = this.render();
  // Этот небезопасный метод для упрощения логики
  // Используйте шаблонизатор из npm или напишите свой безопасный
  // Нужно не в строку компилировать (или делать это правильно),
  // либо сразу в DOM-элементы возвращать из compile DOM-ноду
  console.log(this._element);
  if(this._element) {this._element.innerHTML = block;}
  //this._element = document.createElement('button');
}

// Может переопределять пользователь, необязательно трогать
render() {}

getContent() {
  return this.element;
}

_makePropsProxy(props) {
  // Можно и так передать this
  // Такой способ больше не применяется с приходом ES6+
  
  const self = this;
/*
  return props;
  */
  
  let theProxy = new Proxy(props, {
    get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },
    
    set(target, prop, value) {
      target[prop] = value;
      self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
      return true;
    },
    
    deleteProperty() {
      throw new Error("Нет доступа");
    }
  });
  
  return theProxy;
}

_createDocumentElement(tagName) {
  // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
  return document.createElement(tagName);
}

show() {
  this.getContent().style.display = "block";
}

hide() {
  this.getContent().style.display = "none";
}
}
