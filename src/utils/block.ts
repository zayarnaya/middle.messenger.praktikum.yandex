import { EventBus } from "./event-bus";
import { v4 as makeUUID } from 'uuid';
import { Events } from "../types";


export class Block<Props extends {}, Children extends Block<Props, Children>>  {
  public static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update"
  };

  private _element = null;
  private _meta: Record<any, any> = {};
  public _id = null;
  public props: Props;
  public eventBus: Function;
  public children: Children | {};
  public withInternalID: boolean = false;
  public events: Events;
  public eventTarget: string;

  /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */

  public constructor(tagName: string = "div", propsAndChildren: Record<string, any> = {}, withInternalID?: boolean, classname?: string) {
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

  private _getChildren(propsAndChildren) {
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


  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    const { classname } = this._meta;
    this._element = this._createDocumentElement(tagName);
    if (classname) {
      classname.split(" ").forEach(name =>
        this._element.classList.add(name)
      )
    }
  }

  public init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidMount(oldProps?) { }

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) {
      return;
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  public componentDidUpdate(oldProps, newProps) {
    return true;
  }

  public setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    const { children, props } = this._getChildren(nextProps);

    if (Object.entries(children), length) {
      Object.assign(this.children, children);
    };

    if (Object.entries(props), length) {
      Object.assign(this.props, props);
    };

  };

  get element() {
    return this._element;
  }

  private _render() {

    const block = this.render();
    this._removeEvents();
    if (typeof block == "string") {
      if (this._element) { this._element.innerHTML = block; };
    } else {
      this._element.innerHTML = '';
      this._element.appendChild(block);
    }
    this._addEvents();


  }

  public render(): void {

  }

  public getContent() {
    return this.element;
  }

  private _addEvents() {

    if (!!this.events && !!this.eventTarget) {
      Object.keys(this.events).forEach(eventName => {

        this._element.querySelector(this.eventTarget).addEventListener(eventName, this.events[eventName]);
      });
    };

  }

  private _removeEvents() {
    const { events = {} } = this.props;
    if (events) {
      Object.keys(events).forEach(eventName => {
        this._element.removeEventListener(eventName, events[eventName]);
      });
    } else if (!events) {
      return;
    }
  }

  private _makePropsProxy(propsAndChildren) {

    let theProxy = new Proxy(propsAndChildren, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set(target, prop, value) {
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },

      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });

    return theProxy;
  }

  private _createDocumentElement(tagName: string) {
    const element: HTMLElement = document.createElement(tagName);
    if (!!this.withInternalID) { element.setAttribute('data-id', this._id); };
    return element;
  }

  public compile(template: Function, props: Props) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment: HTMLTemplateElement = this._createDocumentElement('template') as HTMLTemplateElement;

    fragment.innerHTML = template(propsAndStubs);
    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub.replaceWith(child.getContent());
    });



    return fragment.content;
  }

  public show() {
    this.getContent().style.display = "flex";
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}
