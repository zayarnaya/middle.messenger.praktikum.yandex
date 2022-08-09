import { EventBus } from "./event-bus";
import {v4 as makeUUID} from 'uuid'

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update"
  };

_element = null;
_meta: Record<any, any> = {};
_id = null;
props = {};
eventBus;
children;
withInternalID = false;
events;
eventTarget: string;

/** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

constructor(tagName: string = "div", propsAndChildren: Record<string, any> = {}, withInternalID?: boolean) {
  const { children, props } = this._getChildren(propsAndChildren);
  this.children = children;

  const eventBus = new EventBus();
  this._meta = {
    tagName,
    props
  };

  this._id = makeUUID();

  this.props = this._makePropsProxy({ ...props, __id: this._id });
  this.withInternalID = withInternalID;

  this.eventBus = () => eventBus;

  this._registerEvents(eventBus);
  eventBus.emit(Block.EVENTS.INIT);
}

_getChildren(propsAndChildren) {
  const children = {};
  const props = {};

  Object.entries(propsAndChildren).forEach(([key, value]) => {
if (value instanceof Block) {
          children[key] = value;
} else {
          props[key] = value;
      }
});

  return { children, props };
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
  Object.values(this.children).forEach(child => {
    child.dispatchComponentDidMount();
});
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
  console.log("RENDER", this);
  const block = this.render(); // render теперь возвращает DocumentFragment

        this._removeEvents();
        if(typeof block == "string") {
          if(this._element) {this._element.innerHTML = block;};
        } else {
          this._element.innerHTML = ''; 
          this._element.appendChild(block);
        }
        // удаляем предыдущее содержимое
console.log(typeof block, "ТИП БЛОКА");

console.log(this.events, "EVENTS");
console.log(this._element, "ELEMENT");
if(this.eventTarget) {
  console.log(this._element.querySelector(this.eventTarget), "TARGET");
  //this._element.querySelector(this.eventTarget)._addEvents();
  
}
      this._addEvents();
      
      

  /*
  const block = this.render();
  //console.log(this, 'render this');
  //this._removeEvents();
  // Этот небезопасный метод для упрощения логики
  // Используйте шаблонизатор из npm или напишите свой безопасный
  // Нужно не в строку компилировать (или делать это правильно),
  // либо сразу в DOM-элементы возвращать из compile DOM-ноду
  //console.log(this._element, "THIS ELEMENT");
  //console.log(this.render(), "THIS RENDER");
  this._removeEvents();
  if(this._element) {this._element.innerHTML = block;};
  this._addEvents();
  //console.log(this.events);
  //this._element = document.createElement('button');
  */
}

// Может переопределять пользователь, необязательно трогать
render() {}

getContent() {
  return this.element;
}

_addEvents() {
  //const {events = {}} = this.props;
  //const events = this.events;
  console.log(this, "THIS");
  console.log(this.events, "THIS.EVENTS FROM ADDEVENTS");
  console.log(this.props, "THIS PROPS");
  console.log(this._element.querySelector(this.eventTarget), "TARGET FROM ADDEVENTS");

  if(this.events && this.eventTarget) {
    Object.keys(this.events).forEach(eventName => {
      console.log(this._element, "КУДА ВЕШАТЬ ИВЕНТЫ");
      this._element.querySelector(this.eventTarget).addEventListener(eventName, this.events[eventName]);
    });
  };

  /*
    Object.keys(this.events).forEach(eventName => {
    console.log(this._element, "КУДА ВЕШАТЬ ИВЕНТЫ");
    this._element.addEventListener(eventName, this.events[eventName]);
  });
  */
}

_removeEvents() {
  const {events = {}} = this.props;

  Object.keys(events).forEach(eventName => {
    this._element.removeEventListener(eventName, events[eventName]);
  });
}

_makePropsProxy(propsAndChildren) {
  // Можно и так передать this
  // Такой способ больше не применяется с приходом ES6+
  
  const self = this;
/*
  return props;
  */
  
  let theProxy = new Proxy(propsAndChildren, {
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
  const element = document.createElement(tagName);
  if(this.withInternalID) {element.setAttribute('data-id', this._id);};
  element.setAttribute('data-id', this._id);
  return element;
}

compile(template, props) {
  const propsAndStubs = { ...props };
  console.log("COMPILE");

  Object.entries(this.children).forEach(([key, child]) => {

      propsAndStubs[key] = `<div data-id="${child._id}"></div>`

  });

  const fragment = this._createDocumentElement('template');

        fragment.innerHTML = template(propsAndStubs);

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            console.log(stub, "STUB");
            stub.replaceWith(child.getContent());
        });



        return fragment.content;     
}

show() {
  this.getContent().style.display = "flex";
}

hide() {
  this.getContent().style.display = "none";
}
}
