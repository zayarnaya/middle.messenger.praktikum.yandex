const fragment = document.createDocumentFragment();
const elemMain = document.createElement("main");
const elemDiv = document.createElement("div");

elemMain.classList.add("main-wrapper");
elemDiv.classList.add("messenger-wrapper");

export function layout_main() {
  elemMain.appendChild(elemDiv);
  fragment.appendChild(elemMain);
  document.body.appendChild(fragment);

  let theList = document.createElement('div');
  theList.innerHTML = `
      
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
      </ul>`
  document.body.append(theList);
}
