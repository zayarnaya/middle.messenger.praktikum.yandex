export function error404() {
  let htmlString = `
        <div class="error center-center">
            <span class="error__num"></span>
            <p class "error__message>Ой! Поворот не туда</p>
            <a  onclick="window.history.back()"  class="error__a-back">Вернуться</a>
        </div>
        `;
  document.querySelector(".messenger-wrapper").innerHTML = htmlString;
  document.querySelector("span.error__num").textContent = "404";
}
