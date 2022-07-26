Проект первого спринта "Мессенджер"
=======
Pull-request https://github.com/zayarnaya/middle.messenger.praktikum.yandex/pull/1

Макет в фигме https://www.figma.com/file/OrsT50kYteyyJFHShrcAYz/Chat?node-id=0%3A1

Сборка Parcel: npm run dev

Express: npm run start

Netlify: https://grand-vacherin-ee2965.netlify.app/

Для удобства просмотра макета добавлен список ссылок на страницы (левый нижний угол), в дальнейшем он будет удален.

В версии 1.0.1 учтены замечания ревьюера:
- подправлен package.json: команда запуска server.js, флаг --port, фиксированные зависимости;
- верстка приведена в большее соответствие макетам;
- поправлен внешний вид кода;
- файл стилей разбит на модули и паршалы, по возможности удалены дубли;
- инпуты, кнопка форм, аватарка профиля и строки профиля переписаны как модули;
- удалены неиспользуемые классы и лишние div'ы;
- я не изыскала возможности избавиться от использования innerHTML, но заменила прямые вставки html-строк на использование шаблонов.

Мессенджер годен:
- ходить по внутренним ссылкам;
- ходить по оглавлению (для удобства просмотра, левый нижний угол);
- проверять заполнение форм (отправлять не умеет);
- при наводке на аватар в страницах "изменить данные профиля" и "изменить пароль" предлагает выбрать файл. 

Информация для передачи в формы и компоненты берется из файла data.js.

Страница чата сверстана частично, список отрисовывается компонентами по данным dummy-файла, окно чата статичное.

В качестве шаблонизатора использован handlebars.

В качестве дизайна использовались дефолтные макеты, в процессе дорабатывались и будут еще дорабатываться.