
import { error404 } from "../static_pages/page404/index";
import { error500 } from "../static_pages/page500/index";
import { validatorAll } from "./validator/validator";
import { assignAttr } from "./assign-attr";
import { passValidator } from "./validator/passValidator";
import { underConstruction } from "../static_pages/under_construction/under_construction.js";

import { ProfilePage } from "../components/forms/my-profile";
import { changeProfilePage } from "../components/forms/form-changeprofile";
import { changePassPage } from "../components/forms/form-changepass";
import { signinForm } from "../components/forms/form-signin";
import { loginForm } from "../components/forms/form-login";
import { forgotPassPage } from "../components/forms/form-forgotpass";
import { loggingOut } from "../static_pages/logout";

import { addSubmitListener } from "./form-actions/send-request";

import { render } from "./renderDOM";
import { chatListOuter } from "../components/chats/chat-list";
import { buildChatLeftPanel } from "../components/chats/chat-list/menu";
import { buildLeftPanel } from "../components/chats/chat-list/chat-list";

const wrap = document.querySelector("messenger-wrapper");



export function changeRender() {
    switch (document.location.hash) {
        case "#chats":
            //underConstruction();
            //chatPage();
            //document.getElementById("mini-menu")
            //.addEventListener("click", function () {
            //    document.getElementById("open-menu").classList.toggle("hidden");
            //});
            //chatListOuter();
            //buildChatLeftPanel();
            buildLeftPanel();
            break;
            

        case "#myprofile":
            ProfilePage();
            break;

        case "#changeprofile":
            changeProfilePage();
            break;
            

        case "#changepass":
            changePassPage();
            
            break;

        case "#signin":
            signinForm();
            break;
            
        case "#forgotpass":
            forgotPassPage();
            break; 


        case "#login":
            loginForm();
            break;
  

        case "#logout":
            loggingOut();
            break;

        case "#500": 
            error500();
            break;
            

        case "#404": 
            error404();
            break;
/*
        case "#no": //лучше ее потом вообще убрать
            underConstruction();
            break;
*/
        default:
            render(".messenger-wrapper", loginForm);
            assignAttr("login");
            validatorAll();
            break;
    };


    if (!document.getElementById("theList")) {
        addList();
    }

}

function addList() {
    let fragment = document.createDocumentFragment();
    let theList = document.createElement("div");
    theList.id = "theList";
    let list = document.createElement("ul");
    const listed = {
        login: "Логин",
        forgotpass: "Забыли пароль", 
        signin: "Регистрация",
        myprofile: "Профиль",
        changeprofile: "Изменить данные профиля",        
        changepass: "Изменить пароль",
        chats: "Чаты (декоративная страница без действий)",
        404: "Ошибка 404",
        500: "Ошибка 500",
        logout: "Разлогинились"

    };

    for(let i = 0; i < Object.keys(listed).length; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", `#${Object.keys(listed)[i]}`);
        a.text = Object.values(listed)[i];

        let li = document.createElement("li");
        li.append(a);
        
        list.append(li);
    };

    theList.append(list);
    fragment.appendChild(theList);
    document.body.appendChild(fragment);

}
