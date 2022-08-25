import { Route } from "./route";


export class Router {
    public routes: Route[] = [];
    public history: History;
    private _currentRoute: Route | null;
    private _rootQuery: string;

    //private __instance;

    constructor(rootQuery: string) {
        //if (Router.__instance) {
        ////    return Router.__instance; ///хз что это
        //}

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        //Router.__instance = this;

    }

    use(pathname: string, block) {
//console.log(pathname, block, "USE ARGS");
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start() {

        window.onpopstate = (this, event => {
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
        route.render(route, pathname);// тут наверное нужен другой рендер? хотя вроде нет. Надо посмотреть что с аргументами

    }

    go(pathname: string) {
        console.log(pathname);
        if(!!this._currentRoute) {
        this._currentRoute.leave();}
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        if(!!this._currentRoute) {
            this._currentRoute.leave();}
        this.history.back();

    }

    forward() {

        if(!!this._currentRoute) {
            this._currentRoute.leave();}
        this.history.forward();
    }

    getRoute(pathname: string) {

        return this.routes.find(route => route.match(pathname));
    }
}
