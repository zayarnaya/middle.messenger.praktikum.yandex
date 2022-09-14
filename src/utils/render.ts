import { error404 } from "../static_pages/page404/index";
import { profilePage } from "../components/forms/my-profile";
import { changeProfilePage } from "../components/forms/form-changeprofile";
import { changePassPage } from "../components/forms/form-changepass";
import { signinForm } from "../components/forms/form-signin";
import { loginForm } from "../components/forms/form-login";
import { loggingOut } from "../static_pages/logout";
import { chatsPage } from "../components/chats";
import { chatIDfromLocation, router } from "../consts";
import { UserAuthController } from "./controllers/userAuthController";
import store, { StoreEvents } from "./store";

export function pageRouter() {
  const loc = document.location.pathname;
  const wrap: HTMLElement = document.querySelector(
    ".messenger-wrapper"
  ) as HTMLElement;

  //Проверка на залогиненного юзера
  const check = new UserAuthController();
  check
    .getUser()
    .then((response: XMLHttpRequest) => {
      if (response.status == 200) {
        let adata = JSON.parse(response.response);
        Object.entries(adata).forEach((entry) => {
          localStorage.setItem(`user_${entry[0]}`, entry[1] as string);
        });
        if (loc == "/") {
          router.go("/messenger");
        }
      } else if (!response || response.status != 200) {
        if (loc != "/") {
          if (loc != "/sign-up") {
            wrap.textContent =
              "Ой! Что-то разлогинились, перебрасываем на страницу входа";
            setTimeout(() => router.go("/"), 2000);
            localStorage.clear();
          }
        }
      }
    })
    .catch(() => {
      localStorage.clear();
      throw new Error("Сервер отдает ошибку");
    });

  const userID = localStorage.getItem("user_id");
  console.log(userID);
  store.on(StoreEvents.NewLocSet, () => {
    const newloc = store.getState().newLoc;
    if (!!newloc && loc != newloc) {
      pageRouter();
      store.setNewLoc("newLoc", null);
    }
  });

  const chatID = chatIDfromLocation();

  router
    .use("/", loginForm)
    .use("/sign-up", signinForm)
    .use("/messenger", chatsPage)
    .use("/messenger/", chatsPage)
    .use(`/messenger/#${chatID}`, chatsPage)
    .use("/settings", profilePage)
    .use("/settings#change", changeProfilePage)
    .use("/settings#pass", changePassPage)
    .use("/logout", loggingOut)
    .use(loc, error404)

    .start();

  //проверка на отсутствие данных о юзере, если гетЮзер выдает ошибку
  // if (!userID && loc != "/" && loc != "/sign-up") {
  //   router.go("/");
  // }
}
