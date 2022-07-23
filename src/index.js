import "./style.scss";
import {layout_main} from "./layouts/main/main.js";
import {changeRender} from "./utils/render.js";

 layout_main();
 document.addEventListener('DOMContentLoaded', changeRender);
 window.addEventListener('hashchange', changeRender);


