Проект "Мессенджер": четвертый спринт, первая версия

Pull-request: https://github.com/zayarnaya/middle.messenger.praktikum.yandex/pull/4

Макет в фигме https://www.figma.com/file/OrsT50kYteyyJFHShrcAYz/Chat?node-id=0%3A1

Dev-режим: npm run dev

Build-режим: npm run build

Рабочий режим: npm run start

Тестирование: npm run test

Проект на Heroku: https://yachatdev.herokuapp.com/ - слетел, увы. RIP

В server.js встроена защита от DOS-атак (временный бан по айпи)

Санитайзинг осуществляется через чистку тегов для сообщений.

Тестируется роутер, родительский класс (Block), класс работы с запросами (HTTPTransport), функция isEmpty. Работа с запросами тестируется через fake API (jsonplaceholder).

Есть прекоммит: проверка на сборку + те самые 4 тестика.

Проведен аудит пакетов, ненужное удалено, нужное апдейтнуто, уязвимости ушли вместе с пакетами парсела.

Мессенджер годен:
- ходить по внутренним ссылкам;
- проверять заполнение форм;
- работать с API:
  -авторизация и выход;
  -отправка и получение сообщений;
  -работа с данными профиля пользователя;
  -работа с чатами - завести новый чат, пригласить друга, удалить друга, поменять аватарку, удалить чат. 
- при отправке форм переходить по таймауту: 
  - со страницы входа/регистрации на страницу чатов;
  - со страницы смены пароля на страницу профиля;
- если юзер залогинен, сразу загружается страница чатов;
- если набирается необслуживаемый роутером адрес, должна выскакивать 404

Собирается вебпаком, есть конфиг докера. 

Докер ставился по рекомендациям для Ubuntu (у меня Xubuntu, достаточно схожа), конфиг собран с учетом рекомендаций https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/   

Сборка стандартная: из папки проекта запустить билд
sudo /usr/bin/docker build . --tag chat 
запустить чат
sudo /usr/bin/docker run -p 3000:3000 chat

Открыт 3000 порт.

Информация для начальной передачи в формы и компоненты берется из файла data.ts.

В качестве шаблонизатора использован handlebars.

В проекте используются линтеры (ESLint, StyleLint).

Повторяющиеся компоненты заброшены в рендер немного странным образом.

Конфигурационный файл TS настроен в соответствии с требованиями, плюс добавлены флаги и библиотеки, с которыми он меньше ругается.

В качестве дизайна использовались дефолтные макеты, в процессе дорабатывались, частично, признаюсь, в обратную сторону.
