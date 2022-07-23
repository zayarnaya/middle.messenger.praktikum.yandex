export function error404() {
    let htmlString = `
        <div class="error center-center">
            <span class="error__num">404</span>
                Ой! Поворот не туда
                <a  onclick="window.history.back()"  class="error__a-back">Вернуться</a>
        </div>
        `;
    document.querySelector('.messenger-wrapper').innerHTML = htmlString;
}
