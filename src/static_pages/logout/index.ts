import { router } from "../../consts";
import { render } from "../../utils/renderDOM";
import Logout from "./logout";

export function loggingOut() {
  const logout = new Logout({
    classname: "color-blue",
    message: "Вы успешно вышли! Перенаправляем на ",
    link: "/",
    linkMessage: "страницу входа...",
  });

  render(".messenger-wrapper", logout);

  setTimeout(() => {
    router.go("/");
  }, 2000);
}
