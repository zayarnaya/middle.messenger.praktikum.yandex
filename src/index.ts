import "./style.scss";
import { changeRender } from "./utils/render";

document.addEventListener("DOMContentLoaded", changeRender);
window.addEventListener("hashchange", changeRender);

