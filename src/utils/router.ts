import { Route } from "./route";

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
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.renderIt();
  }

  go(pathname: string) {
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
