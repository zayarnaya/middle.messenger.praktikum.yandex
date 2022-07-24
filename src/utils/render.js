import { chatPage } from "../modules/chats.js";
import { loginPage } from "../modules/login.js";
import { ProfilePage } from "../modules/profile.js";
import { changeProfilePage } from "../modules/changeprofile.js";
import { changePassPage } from "../modules/changepass.js";
import { signinPage } from "../modules/signin.js";
import { forgotPassPage } from "../modules/forgotpass.js";
import { layout_main } from "./../layouts/main/main.js";
import { error404 } from "./../static_pages/404.js";
import { error500 } from "./../static_pages/500.js";
import { validatorAll } from "./../utils/validator/validator.js";
import { assignAttr } from "./assign-attr.js";
import { passValidator } from "./validator/passValidator.js";

export function changeRender() {
    switch (document.location.hash) {
        case "#chats":
            chatPage();
            break;

        case "#myprofile":
            ProfilePage();
            break;

        case "#changeprofile":
            changeProfilePage();
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
            layout_main();
            error500();
            break;

        case "#404":
            layout_main();
            error404();
            break;

        default:
            loginPage();
            assignAttr("login");
            validatorAll();
            break;
    };
   
}
