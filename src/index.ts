import { router } from "./consts";
import "./style.scss";
import { pageRouter } from "./utils/render";

document.addEventListener("DOMContentLoaded", pageRouter);
const back: HTMLButtonElement = document.getElementById("back") as HTMLButtonElement;
const forward: HTMLButtonElement = document.getElementById("forward") as HTMLButtonElement;
back.addEventListener("click", (e: Event) => {
    e.preventDefault();
    router.back();
});
forward.addEventListener("click", (e: Event) => {
    e.preventDefault();
    router.forward();
});
