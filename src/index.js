import "./style.scss";
import { changeRender } from "./utils/render.js";

document.addEventListener("DOMContentLoaded", changeRender);
window.addEventListener("hashchange", changeRender);
