import { error404 } from "../static_pages/page404/index";
import { error500 } from "../static_pages/page500/index";
import { underConstruction } from "../static_pages/under_construction/under_construction";
import { profilePage } from "../components/forms/my-profile";
import { changeProfilePage } from "../components/forms/form-changeprofile";
import { changePassPage } from "../components/forms/form-changepass";
import { signinForm } from "../components/forms/form-signin";
import { loginForm } from "../components/forms/form-login";
import { forgotPassPage } from "../components/forms/form-forgotpass";
import { loggingOut } from "../static_pages/logout";
import { chatsPage } from "../components/chats";
import { Router } from "./router";
import { chatIDfromLocation, router } from "../consts";
import { isAuth } from "./isAuth";
import { HTTPTransport } from "./http-transport";
import { APIurls } from "../types";
import { UserAuthController } from "./controllers/userAuthController";
import { checkFile } from "../static_pages/check-file/checkfile";


export function pageRouter() {
  //console.log(isAuth());
  let loc = document.location.pathname;
  //const check = new HTTPTransport;
  //check.get(APIurls.GETUSER, {})
  const check = new UserAuthController;
  check.getUser()
  .then(response => {
    if(response.status == 200) {
      let adata = JSON.parse(response.response);
      Object.entries(adata).forEach(entry => {

        localStorage.setItem(`user_${entry[0]}`, entry[1]);
      });
      
      console.log("ГЕТЮЗЕР ПРОШЕЛ");
      console.log(response);
      if (loc == "/") {
        router.go("/chats");
      }
      
  } else if (response.status != 200) {
      console.log(response.status, response.response);
      console.log("НЕ ЗАЛОГИНЕНЫ ИЛИ РАЗЛОГИНИЛИСЬ");
      if(loc != "/") {
            document.querySelector(".messenger-wrapper").textContent = 
            "Ой! Что-то разлогинились, перебрасываем на страницу входа";
            setTimeout(() => router.go("/"), 2000);
      }

      
  } else if (!response) {
      console.log("ГЕТЮЗЕР НЕ ПОЛУЧИЛ ОТВЕТА");
      //return false;
  }
});

  
  //let loc = document.location.pathname;
  // let data = null;
  // if(loc.includes("chats")) {
  //   data = loc.slice(loc.indexOf("chats") + 6);
  //   console.log(data, "DATA");
  // }
  // let chatID: number | null = !!data
  // ? Number(data)
  // : null;
  let chatID = chatIDfromLocation();

  // let userID: number = !!data
  // ? data.userID
  // : null;

  //console.log(chatID);
  // if(!!isAuth() && loc == "/") {
  //   router.go("/chats");
  // } else if (!isAuth() && loc == "/") {
  //   console.log("НЕ ЗАЛОГИНЕНЫ");
  // } else if (!isAuth() && loc != "/") {
  //   document.querySelector(".messenger-wrapper").textContent = 
  //   "Ой! Что-то разлогинились, перебрасываем на страницу входа";
  //   setTimeout(() => router.go("/"), 3000);
  // }

  if (!document.getElementById("theList")) {
    addList();
  }

router.use("/", loginForm)
.use("/sign-up", signinForm)
.use("/settings", changeProfilePage)
.use("/chats", chatsPage)
.use(`/chats/${chatID}`, chatsPage)
.use("/profile", profilePage)
.use("/changepass", changePassPage)
.use("/forgotpass", forgotPassPage)
.use("/logout", loggingOut)
.use("/login", loginForm)
.use("/file", checkFile)

    // Запускаем роутер
    .start();



    
}

export function changeRender(): void {
  switch (document.location.hash) {
    case "":
      loginForm();
      break;

    case "#chats":
      chatsPage();
      break;

    case "#myprofile":
      profilePage();
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

    case "#no":
      underConstruction();
      break;

    default:
      error404();
      break;
  }

  if (!document.getElementById("theList")) {
    addList();
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
    "login": "Логин",
    "profile": "Профиль",
    "settings": "Настройки профиля",
    "changepass": "Изменить пароль",
    "chats": "Чаты (декоративная страница без действий)",
    404: "Ошибка 404",
    500: "Ошибка 500",
    "logout": "Разлогинились",
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
