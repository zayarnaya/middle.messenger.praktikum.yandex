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
children: Record<string, Block>;
withInternalID = false;
events: Record<string, any>;
eventTarget: string;

/** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

constructor(tagName: string = "div", propsAndChildren: Record<string, any> = {}, withInternalID?: boolean, classname?: string) {
  const { children, props } = this._getChildren(propsAndChildren);
  this.children = children;

  const eventBus = new EventBus();
  this._meta = {
    tagName,
    props,
    classname
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
  const { classname } = this._meta;
  this._element = this._createDocumentElement(tagName);
  if(classname) {
    this._element.classList.add(classname);
  }
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

  const { children, props } = this._getChildren(nextProps);

  if(Object.entries(children),length) {
    Object.assign(this.children, children);
  };

  if(Object.entries(props),length) {
    Object.assign(this.props, props);
  };

};

get element() {
  return this._element;
}

_render() {
  console.log("RENDER", this);
  const block = this.render(); // render теперь возвращает DocumentFragment
 console.log(block, "BLOCK");
        this._removeEvents();
        if(typeof block == "string") {
          if(this._element) {this._element.innerHTML = block;};
        } else {
          this._element.innerHTML = ''; 
          this._element.appendChild(block);
        }
      this._addEvents();     
      
}

// Может переопределять пользователь, необязательно трогать
render() {}

getContent() {
  return this.element;
}

_addEvents() {
  
  if(this.events && this.eventTarget) {
    Object.keys(this.events).forEach(eventName => {

      this._element.querySelector(this.eventTarget).addEventListener(eventName, this.events[eventName]);
    });
  };

}

_removeEvents() {
  const {events = {}} = this.props;
  if(events) {
    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  } else if(!events) {
    return;
  }


}

_makePropsProxy(propsAndChildren) {

  let theProxy = new Proxy(propsAndChildren, {
    get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },
    
    set(target, prop, value) {
      target[prop] = value;
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
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
  //element.setAttribute('data-id', this._id);
  return element;
}

compile(template, props) {
  const propsAndStubs = { ...props };
  console.log("COMPILE");
  console.log(this.children, "CHILDREN");

  Object.entries(this.children).forEach(([key, child]) => {

      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      console.log(propsAndStubs, "ЭТИ ЧОРТОВЫ ДИВЫ");
      console.log(child.getContent(), "В ЦИКЛЕ");

  });

  const fragment: HTMLTemplateElement = this._createDocumentElement('template');

        fragment.innerHTML = template(propsAndStubs);
        console.log(fragment.innerHTML, "HTML");
        

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
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
