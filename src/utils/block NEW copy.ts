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
_props = {};
_eventBus;
_children: Block[];
_withInternalID = false;
_events;
_eventTarget: string;

/** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

constructor(tagName: string = "div", propsAndChildren: Record<string, any> = {}, withInternalID?: boolean) {
  const { children, props } = this._getChildren(propsAndChildren);
  this._children = children;

  this._eventBus = new EventBus();
  this._meta = {
    tagName,
    props
  };

  this._id = makeUUID();

  this._props = this._makePropsProxy({ ...props, __id: this._id });
  this._withInternalID = withInternalID;

  //this.eventBus = () => eventBus;

  this._registerEvents(this._eventBus);
  this._eventBus.emit(Block.EVENTS.INIT);
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
  this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
}

_componentDidMount() {
  this.componentDidMount();
  Object.values(this._children).forEach(child => {
    child.dispatchComponentDidMount();
});
  this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  this._eventBus.emit(Block.EVENTS.FLOW_CDU);
}

// Может переопределять пользователь, необязательно трогать
componentDidMount(oldProps?) {}

dispatchComponentDidMount() {
      this._eventBus.emit(Block.EVENTS.FLOW_CDM);
      if(Object.keys(this._children).length) {
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
      }
}

_componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
  
    if (!response) {
      return;
    }
    //this._render();
  this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
}

// Может переопределять пользователь, необязательно трогать
componentDidUpdate(oldProps, newProps) {
  return true;
}

setProps = nextProps => {
  if (!nextProps) {
    return;
  }

  const { children, props } = this._getChildren(nextProps);

  if(Object.entries(children),length) {
    Object.assign(this._children, children);
  };

  if(Object.entries(props),length) {
    Object.assign(this._props, props);
  };

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

console.log(this._events, "EVENTS");
console.log(this._element, "ELEMENT");
if(this._eventTarget) {
  console.log(this._element.querySelector(this._eventTarget), "TARGET");
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
  return this._element;
}

_addEvents() {
  //const {events = {}} = this.props;
  //const events = this.events;
  console.log(this, "THIS");
  console.log(this._events, "THIS.EVENTS FROM ADDEVENTS");
  console.log(this._props, "THIS PROPS");
  console.log(this._element.querySelector(this._eventTarget), "TARGET FROM ADDEVENTS");

  if(this._events && this._eventTarget) {
    Object.keys(this._events).forEach(eventName => {
      console.log(this._element, "КУДА ВЕШАТЬ ИВЕНТЫ");
      this._element.querySelector(this._eventTarget).addEventListener(eventName, this.events[eventName]);
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
  const {events = {}} = this._props;

  Object.keys(events).forEach(eventName => {
    this._element.removeEventListener(eventName, events[eventName]);
  });
}

_makePropsProxy(propsAndChildren) {

  let theProxy = new Proxy(propsAndChildren, {
    get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },
    
    set(target, prop, value) {
      target[prop] = value;
      this._eventBus.emit(Block.EVENTS.FLOW_CDU, {...target}, target);
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
  if(this._withInternalID) {element.setAttribute('data-id', this._id);};
  //element.setAttribute('data-id', this._id);
  return element;
}

compile(template, props) {
  if (typeof props == undefined) {
    props = this._props;
  }
  const propsAndStubs = { ...props };
  console.log("COMPILE");

  Object.entries(this._children).forEach(([key, child]) => {

      propsAndStubs[key] = `<div data-id="${child._id}"></div>`

  });

  const fragment = this._createDocumentElement('template');

        fragment.innerHTML = template(propsAndStubs);
        //fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this._children).forEach(child => {
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
