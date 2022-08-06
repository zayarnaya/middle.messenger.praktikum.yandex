import { render } from "../../utils/renderDOM";
import Logout from "./logout";

export function loggingOut() {
    const logout = new Logout({
        classname: "color-blue",
        message: "Вы успешно вышли! Перенаправляем на ",
        link: "#login",
        linkMessage: "страницу входа..."
    });

    console.log(logout.getContent());

    render(".messenger-wrapper", logout);

    setTimeout(() => {
        location.href="#login";
      }, 3000); 
}

/*
import { Logout } from "./logout";
import logoutPage from "./__logout.hbs";

export const logout = new Logout({
    classname: "red",
    message: "Вы успешно вышли! Перенаправляем на страницу входа..."

})
*/
