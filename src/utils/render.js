
/*import { chatPage } from "../modules/chats.js";
import { loginPage } from "../modules/login.js";
import { ProfilePage } from "../modules/profile.js";
import { changeProfilePage } from "../modules/changeprofile.js";
import { changePassPage } from "../modules/changepass.js";
import { signinPage } from "../modules/signin.js";
import { forgotPassPage } from "../modules/forgotpass.js";
*/
//import { error404 } from "./../static_pages/page404/page404.js";
//import { error404 } from "./../static_pages/page404/page404";

import { error404 } from "./../static_pages/page404/index";


//import { error500 } from "./../static_pages/page500/page500.js";
//import { error500 } from "./../static_pages/page500/page500";

import { error500 } from "./../static_pages/page500/index";

//import { validatorAll } from "./../utils/validator/validator.js";
import { validatorAll } from "./../utils/validator/validator";
//import { assignAttr } from "./assign-attr.js";
import { assignAttr } from "./assign-attr";
import { passValidator } from "./validator/passValidator.js";
import { underConstruction } from "../static_pages/under_construction/under_construction.js";

//import { chatPage } from "../modules/chats";

//import { loginPage } from "../modules/login";

import { loginForm } from "./../components/forms/form-login/form-login";
//import { btn } from "./../components/forms/form-login/form-login";
//import { inp } from "./../components/forms/form-login/form-login";

import { ProfilePage } from "../modules/profile";
import { changeProfilePage } from "../modules/changeprofile";
import { changePassPage } from "../modules/changepass";
//import { signinPage } from "../modules/signin";
import { signinForm } from "../components/forms/form-signin/form-signin";
import { forgotPassPage } from "../modules/forgotpass";
//import { getData } from "./form-actions/get-data";
import { addSubmitListener } from "./form-actions/send-request";

const wrap = document.querySelector("messenger-wrapper");

function render(query, block) {
    const root = document.querySelector(query);
    root.textContent = "";
    root.appendChild(block.getContent());
        block.dispatchComponentDidMount();
    return root;
  }

export function changeRender() {
    switch (document.location.hash) {
        case "#chats":
            underConstruction();
            //chatPage();
            //document.getElementById("mini-menu")
            //.addEventListener("click", function () {
            //    document.getElementById("open-menu").classList.toggle("hidden");
            //});
            break;

        case "#myprofile":
            ProfilePage();
            break;

        case "#changeprofile":
            changeProfilePage();
            assignAttr("changeprofile");
            validatorAll();
            break;

        case "#changepass":
            changePassPage();
            passValidator("change_signin");
            break;

        case "#signin":
            //signinPage();
            //assignAttr("signin");
            //validatorAll();
            //passValidator("signin");
            render(".messenger-wrapper", signinForm);
            break;

        case "#forgotpass":
            forgotPassPage();
            break;

        case "#login":
            //console.log('login', typeof loginForm);
            render(".messenger-wrapper", loginForm);
            addSubmitListener();
            /*
            document.querySelector("form").addEventListener("submit", function (event) {
                event.preventDefault();
                getData();
              });
              */
            //loginPage();
            assignAttr("login");
            validatorAll();
            break;

        case "#logout":
            //loginPage();
            render(".messenger-wrapper", loginForm);
            break;

        case "#500": //через класс
            //error500();
            render(".messenger-wrapper", error500);
            break;

        case "#404": //через класс

            //error404();
            //error404;
            render(".messenger-wrapper", error404);
            break;

        case "#no": //лучше ее потом вообще убрать
            underConstruction();
            break;

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
        chats: "Чаты (заглушка)",
        404: "Ошибка 404",
        500: "Ошибка 500",

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
