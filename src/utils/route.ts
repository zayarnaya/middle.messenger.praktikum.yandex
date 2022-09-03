import { isEqual } from "./isequal";

export class Route {
    private _pathname: string;
    private _blockClass: Function;
    private _block: any;

    constructor(pathname: string, view: Function) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
    }

    get pathname() {
        return this._pathname;
    }

    leave() {
        let wrapper: HTMLElement = document.querySelector(".messenger-wrapper") as HTMLElement;
        if (!!this._block && !!wrapper) {
            wrapper.textContent = "";
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    renderIt() {
        if (!this._block) {
            this._block = this._blockClass;
            this._block();
            return;
        }
        this._block();
    }
}
