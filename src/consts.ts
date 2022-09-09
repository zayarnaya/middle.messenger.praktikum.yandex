import { HTTPTransport } from "./utils/http-transport";
import { Router } from "./utils/router";

export const PATTERNS: Record<string, string> = {
  login: "^[\\d\\w\\-]*[a-zA-Z]+[\\d\\w\\-]*$",
  /*
    от 3 до 20 символов, латиница, может содержать цифры, 
    но не состоять из них, без пробелов, без спецсимволов 
    (допустимы дефис и нижнее подчёркивание)
    */
  first_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
  second_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
  /*
    латиница или кириллица, первая буква должна быть заглавной, 
    без пробелов и без цифр, нет спецсимволов (допустим только дефис).
    */
  email: "^[\\w\\d]+@\\w+\\.\\w+",
  /*
    латиница, может включать цифры и спецсимволы вроде дефиса, 
    обязательно должна быть «собака» (@) и точка после неё, 
    но перед точкой обязательно должны быть буквы.
    */
  phone: "^\\+?\\d{10,15}$",
  /*
    от 10 до 15 символов, состоит из цифр, может начинается с плюса.
    */
  password: "^(?=.*[A-ZА-ЯЁ])(?=.*\\d).{8,40}$",
  newPassword: "^(?=.*[A-ZА-ЯЁ])(?=.*\\d).{8,40}$",

  /*
    от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
    */
  message: ".*",
  /*
    Не должно быть пустым
    */

  createChatModalInput: "[A-ZА-ЯЁa-zа-яё\\_\\-\\.\\,\\d]*",
  /*
    Буквы, цифры, дефис, нижнее подчеркивание, точка, запятая
    */

  userSearchModalInput: "^[\\d\\w\\-]*[a-zA-Z]+[\\d\\w\\-]*$",
  /*
    от 3 до 20 символов, латиница, может содержать цифры, 
    но не состоять из них, без пробелов, без спецсимволов 
    (допустимы дефис и нижнее подчёркивание)
    */
};

export const apiPrefix = "https://ya-praktikum.tech/api/v2";

export const chatAPIInstance = new HTTPTransport();

export const router = new Router();

export const locationPrefix = document.location.pathname;

export const chatIDfromLocation = (): number => {
  const loc = document.location.pathname;
  const hash = document.location.hash;
  let data = null;
  let regexp: RegExp = new RegExp("^\\/messenger\\/$");
  if (loc.includes("messenger") && loc.match(regexp) && !!hash) {
    data = hash.slice(1);
  }
  let chatID: string = !!data ? data : "";
  return Number(chatID);
};

export const filePrefix = "https://ya-praktikum.tech/api/v2/resources";

export const wssPrefix = "wss://ya-praktikum.tech/ws/chats";

export const defaulAvatar =
  "https://ya-praktikum.tech/api/v2/resources/885442f2-9e8d-45f8-899f-40ba391a136a/0ba78315-e102-4a90-bc89-7a5243cf1c22_user-secret-solid-gray.png";

export const defaultChatAvatar =
  "https://ya-praktikum.tech/api/v2/resources/6164146d-6a5b-4844-8d38-36bd6b599112/8809d003-c2e2-40b6-b60a-15a2fc114b7b_champagne-glasses-gray.png";

export const wrap: HTMLElement = document.querySelector(
  ".messenger-wrapper"
) as HTMLElement;
