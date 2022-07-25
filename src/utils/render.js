import { chatPage } from "../modules/chats.js";
import { loginPage } from "../modules/login.js";
import { ProfilePage } from "../modules/profile.js";
import { changeProfilePage } from "../modules/changeprofile.js";
import { changePassPage } from "../modules/changepass.js";
import { signinPage } from "../modules/signin.js";
import { forgotPassPage } from "../modules/forgotpass.js";
import { error404 } from "./../static_pages/page404/page404.js";
import { error500 } from "./../static_pages/page500/page500.js";
//import { layout_main } from "./../layouts/main/main.js";
//import { error404 } from "../static_pages/404/404.js";
//import { error500 } from "./../static_pages/500.js";
import { validatorAll } from "./../utils/validator/validator.js";
import { assignAttr } from "./assign-attr.js";
import { passValidator } from "./validator/passValidator.js";
import { underConstruction } from "../static_pages/under_construction/under_construction.js";

export function changeRender() {
    switch (document.location.hash) {
        case "#chats":
            chatPage();
            document.getElementById("mini-menu").addEventListener('click', function(){
                document.getElementById("open-menu").classList.toggle("hidden");
            });
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
            signinPage();
            assignAttr("signin");
            validatorAll();
            passValidator("signin");
            break;

        case "#forgotpass":
            forgotPassPage();
            break;

        case "#login":
            loginPage();
            assignAttr("login");
            validatorAll();
            break;

        case "#logout":
            loginPage();
            break;

        case "#500":
            error500();
            break;

        case "#404":
            error404();
            break;

        case "#no" :
            underConstruction();

        default:
            loginPage();
            assignAttr("login");
            validatorAll();
            break;
    };


if(!document.getElementById('theList')) {
    addList();
}
   
}

function addList() {

    let theList = document.createElement('div');
    theList.id = "theList";
    theList.innerHTML = `
        
        <ul>
        <li><a href="#login">Логин</a></li>
        <li><a href="#forgotpass">Забыли пароль</a></li>
        <li><a href="#signin">Регистрация</a></li>
        <li><a href="#myprofile">Профиль</a></li>
        <li><a href="#changeprofile">Изменить данные профиля</a></li>
        <li><a href="#changepass">Изменить пароль</a></li>
        <li><a href="#chats">Чаты (заглушка)</a></li>
        <li><a href="#404">Ошибка 404</a></li>
        <li><a href="#500">Ошибка 500</a></li>
        </ul>`
    document.body.appendChild(theList);
}
