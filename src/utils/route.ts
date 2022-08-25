import { isEqual } from "./isequal";
import { render } from "./renderDOM";

export class Route {
    private _pathname: string;
    private _blockClass;
    private _block;
    private _props;

    constructor(pathname: string, view: Function, props) {
//console.log(pathname, "PATHNAME", view, "VIEW", props, "PROPS", "ROUTE INCOMING ARGS" );
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        //console.log(this._pathname, "PATHNAME", this._blockClass, "VIEW", this._block, "BLOCK",
        //    this._props, "ROUTE");
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        console.log(this._block);

        if (!!this._block) {
            //this._block.hide();
            let wrapper: HTMLElement = document.querySelector(".messenger-wrapper") as HTMLElement;
            wrapper.textContent = "";
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {

        if (!this._block) {
            //this._block = new this._blockClass(); //////переписать под наше

            this._block = this._blockClass;
            //console.log(this._block, "ROUTE RENDER BLOCK");
            //render(this._props.rootQuery, this._block);
            this._block();
            return;
        }

        //this._block.show();
        this._block();
    }
}
