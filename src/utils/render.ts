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

export function pageRouter() {
  let loc = document.location.pathname;
  let regexp: RegExp = new RegExp("^\\/chats\\/\\d*$");
  if (
    loc != "/" &&
    loc != "/sign-up" &&
    loc != "/settings" &&
    loc != "/profile" &&
    loc != "/changepass" &&
    loc != "/logout" &&
    loc != "/chats" &&
    loc != "/notFound" &&
    !loc.match(regexp)
  ) {
    document.location.pathname = "/notFound";
  }

  const wrap: HTMLElement = document.querySelector(
    ".messenger-wrapper"
  ) as HTMLElement;
  const check = new UserAuthController();
  check.getUser().then((response) => {
    if (response.status == 200) {
      let adata = JSON.parse(response.response);
      Object.entries(adata).forEach((entry) => {
        localStorage.setItem(`user_${entry[0]}`, entry[1] as string);
      });
      if (loc == "/") {
        router.go("/chats");
      }
    } else if (response.status != 200) {
      if (loc != "/") {
        if (loc != "/sign-up") {
          wrap.textContent =
            "Ой! Что-то разлогинились, перебрасываем на страницу входа";
          setTimeout(() => router.go("/"), 2000);
        }
      }
    } else if (!response) {
      return;
    }
  });

  let chatID = chatIDfromLocation();
  if (!document.getElementById("theList")) {
    addList();
  }

  router
    .use("/", loginForm)
    .use("/sign-up", signinForm)
    .use("/settings", changeProfilePage)
    .use("/chats", chatsPage)
    .use(`/chats/${chatID}`, chatsPage)
    .use("/profile", profilePage)
    .use("/changepass", changePassPage)
    .use("/logout", loggingOut)
    .use("/notFound", error404)

    .start();
}

function addList(): void {
  let fragment: DocumentFragment = document.createDocumentFragment();
  let theList: HTMLElement = document.createElement("div");
  theList.id = "theList";
  let list: HTMLElement = document.createElement("ul");
  const listed = {
    "sign-up": "Регистрация",
    forgotpass: "Забыли пароль",
    "": "Логин",
    profile: "Профиль",
    settings: "Настройки профиля",
    changepass: "Изменить пароль",
    chats: "Чаты",
    logout: "Разлогинились",
    notFound: "404",
  };

  for (let i = 0; i < Object.keys(listed).length; i++) {
    let a = document.createElement("a");
    a.setAttribute("href", `/${Object.keys(listed)[i]}`);
    a.text = Object.values(listed)[i];

    let li = document.createElement("li");
    li.append(a);

    list.append(li);
  }

  theList.append(list);
  fragment.appendChild(theList);
  document.body.appendChild(fragment);
}
