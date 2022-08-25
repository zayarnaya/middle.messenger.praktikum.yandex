import "./style.scss";
import { changeRender, pageRouter } from "./utils/render";
import { Router } from "./utils/router";

//document.addEventListener("DOMContentLoaded", changeRender);
//window.addEventListener("hashchange", changeRender);

document.addEventListener("DOMContentLoaded", pageRouter);
//window.addEventListener("loca", changeRender);

/*
const router = new Router(".messenger-wrapper");

router.use('/', MainBlock)
    .use('/chats/{chatId}', ChatsBlock)
    // Запускаем роутер
    .start();

*/
