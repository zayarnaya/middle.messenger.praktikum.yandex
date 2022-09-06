import { router } from "../../consts";
import wideForm from "./wide-form.hbs";
import "./wide-form.scss";

export function layoutWideForm() {
  const wrap: HTMLElement = document.querySelector(
    ".messenger-wrapper"
  ) as HTMLElement;
  wrap.innerHTML = wideForm();
  const btn: HTMLButtonElement = document.getElementById(
    "link-to-chats"
  ) as HTMLButtonElement;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    router.go("/messenger");
  });
}
