import { Route } from "./route";
import store from "./store";

export class Router {
  public routes: Route[] = [];
  public history: History;
  private _currentRoute: Route | null;

  constructor() {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
  }

  get currentRoute() {
    return this._currentRoute;
  }

  use(pathname: string, block: Function) {

    const route = new Route(pathname, block);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (this,
    (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      console.log("NO ROUTE");
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.renderIt();
  }

  go(pathname: string) {
    if(!!this._currentRoute) {
    this._currentRoute.leave();
    }
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
