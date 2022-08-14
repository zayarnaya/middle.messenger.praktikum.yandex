Проект "Мессенджер": второй спринт, вторая версия

Учтены замечания ревьюера:
- максимально (в соответствии с моими умственными способностями) конкретно описаны типы данных;
- переименованы функции, классы, компоненты в формат camelCase/PascalCase;
- функция валидации максимально перенесена в класс;
- инициализация деток перенесена в инициализацию родителя;
- использован тег time (а я про него раньше не знала :) );
- код отформатирован ручками и потом сверху Prettier;
- удалены неиспользуемые файлы;
- учтены остальные замечания тоже :) К сожалению, я не до конца разобралась в дженериках

Макет в фигме https://www.figma.com/file/OrsT50kYteyyJFHShrcAYz/Chat?node-id=0%3A1

Сборка Parcel: npm run dev

Билд Parcel: npm run build

Express: npm run start

Netlify: https://grand-vacherin-ee2965.netlify.app/

Для удобства просмотра приложения добавлен список ссылок на страницы (левый нижний угол).

Мессенджер годен:
- ходить по внутренним ссылкам;
- ходить по оглавлению (для удобства просмотра, левый нижний угол);
- проверять заполнение форм;
- при отправке форм посылать в консоль объект со значением полей;
- при отправке форм переходить по таймауту: 
  - со страницы входа на страницу чатов;
  - со страницы регистрации на страницу входа;
  - со страницы смены пароля на страницу профиля;
  - со страницы "забыли пароль" на страницу входа;
- при наводке на аватар в страницах "изменить данные профиля" и "изменить пароль" предлагает выбрать файл. 

Мессенджер не умеет:
- общаться;
- что-то делать с чатами, поскольку API пока не используем;
- отдавать ошибки.

Информация для передачи в формы и компоненты берется из файла data.ts.

В качестве шаблонизатора использован handlebars.

В проект добавлены линтеры (ESLint, StyleLint).

Есть класс для работы с запросами (незатейливо взятый из тренажера HTTPTransport), который покамест никак не используется, но лежит в /utils.

Стили с первого спринта особо не менялись, немного добавились стили страницы чатов.

Повторяющиеся компоненты заброшены в рендер немного странным образом.

Конфигурационный файл TS настроен в соответствии с требованиями, плюс добавлены флаги и библиотеки, с которыми он меньше ругается.

В качестве дизайна использовались дефолтные макеты, в процессе дорабатывались и будут еще дорабатываться.


