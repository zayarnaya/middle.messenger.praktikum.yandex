import { router } from "../consts";
import { APIurls } from "../types";
import { HTTPTransport } from "./http-transport";
import { isEmpty } from "./minor-functions/isEmpty";
import store from "./store";

export function isAuth(): boolean {
    console.log("ISAUTH");
    //const state = store.getState();
    const user = new HTTPTransport;
    user.get(APIurls.GETUSER, {})
    .then(response => {

        if(response.status == 200) {
            console.log("ГЕТЮЗЕР ПРОШЕЛ");
            console.log(response);
            //return true;
            //let adata = JSON.parse(response.response);
            //store.set("user", adata);
            // if(!!isEmpty(state)) {
            //     console.log("АВТОРИЗОВАЛИСЬ");
            //     //document.location.pathname = "/chats";
            //     router.go("/chats");
            // } else if(!isEmpty(state)) {
            //     console.log("ЕЩЕ НЕ РАЗЛОГИНИЛИСЬ");
            //     return;
            // }
            
        } else if (response.status != 200) {
            console.log(response.status, response.response);
            console.log("НЕ ЗАЛОГИНЕНЫ ИЛИ РАЗЛОГИНИЛИСЬ");
            //return false;

            // if(!!isEmpty(state)) {
            //     return;
            // } else if(!isEmpty(state)) {
            //     console.log("ТАКИ РАЗЛОГИНИЛИСЬ");
            //     //store.set("user", "");
            //     document.querySelector(".messenger-wrapper").textContent = "";
            //     //document.location.pathname = "/";
            //     //router.go("/");
            // }
            
        } else if (!response) {
            console.log("ГЕТЮЗЕР НЕ ПОЛУЧИЛ ОТВЕТА");
            //return false;
        }
    });
    //return false;
}
