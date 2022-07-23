export function layout_main() {
    let htmlString = `<main class="main-wrapper"><div class="messenger-wrapper"></div></main><div id="list"></div>`;
    let listString = `
    <ul>
    <li><a href="#login">Логин</a></li>
    <li><a href="#forgotpass">Забыли пароль</a></li>
    <li><a href="#signin">Регистрация</a></li>
    <li><a href="#myprofile">Профиль</a></li>
    <li><a href="#changeprofile">Изменить данные профиля</a></li>
    <li><a href="#changepass">Изменить пароль</a></li>
    <li><a href="#chats">Чаты (заглушка)</a></li>
    <li><a href="#404">Ошибка 404</a></li>
    <li><a href="#500">Ошибка 500</a></li>
    </ul>
    `;
    document.querySelector('body').innerHTML = htmlString;
    document.querySelector('#list').innerHTML = listString;
}