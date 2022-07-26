import { chatPage } from "../modules/chats.js";
import { loginPage } from "../modules/login.js";
import { ProfilePage } from "../modules/profile.js";
import { changeProfilePage } from "../modules/changeprofile.js";
import { changePassPage } from "../modules/changepass.js";
import { signinPage } from "../modules/signin.js";
import { forgotPassPage } from "../modules/forgotpass.js";
import { error404 } from "./../static_pages/page404/page404.js";
import { error500 } from "./../static_pages/page500/page500.js";
import { validatorAll } from "./../utils/validator/validator.js";
import { assignAttr } from "./assign-attr.js";
import { passValidator } from "./validator/passValidator.js";
import { underConstruction } from "../static_pages/under_construction/under_construction.js";

export function changeRender() {
    switch (document.location.hash) {
        case "#chats":
            chatPage();
            document.getElementById("mini-menu")
            .addEventListener("click", function () {
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

        case "#no":
            underConstruction();
            break;

        default:
            loginPage();
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
