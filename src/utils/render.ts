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
  const hash = document.location.hash;  

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
store.on(StoreEvents.Updated, () => {

  const newloc = store.getState().newLoc;
if (!!newloc && loc != newloc ) {
    pageRouter();
  }

});

  
  if (!document.getElementById("theList")) {
    addList();
  }

  const chatID = chatIDfromLocation();


  router
    .use("/", loginForm)
    .use("/sign-up", signinForm)
    .use("/settings", changeProfilePage)
    .use("/messenger", chatsPage)
    .use("/messenger/", chatsPage)
    .use(`/messenger/#${chatID}`, chatsPage)
    .use("/profile", profilePage)
    .use("/changepass", changePassPage)
    .use("/logout", loggingOut)
    .use(loc, error404)

    .start();
    
    if (!userID && loc != "/" && loc != "/sign-up") {
      router.go("/");
    }
}



function addList(): void {
  let fragment: DocumentFragment = document.createDocumentFragment();
  let theList: HTMLElement = document.createElement("div");
  theList.id = "theList";
  let list: HTMLElement = document.createElement("ul");
  const listed = {
    "sign-up": "Регистрация",
    "forgotpass": "Забыли пароль",
    "": "Логин",
    "profile": "Профиль",
    "settings": "Настройки профиля",
    "changepass": "Изменить пароль",
    "messenger": "Чаты",
    "logout": "Разлогинились",
    "notFound": "404",
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
