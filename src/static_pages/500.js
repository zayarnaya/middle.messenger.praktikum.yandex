export function error500() {
  let htmlString = `
        <div class="error center-center">
            <span class="error__num"></span>
            Ой! Что-то сломалось. Мы уже чиним
            <a  onclick="window.history.back()"  class="error__a-back">Вернуться</a>
        </div>
        `;
  document.querySelector(".messenger-wrapper").innerHTML = htmlString;
  document.querySelector("span.error__num").textContent = "500";
}
