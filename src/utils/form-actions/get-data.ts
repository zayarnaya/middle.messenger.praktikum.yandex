export function getData(): void {

    let message: HTMLElement = document.querySelector(".submit-message") as HTMLElement;
    switch (location.hash) {
        case "#login":
            message.textContent = "Успешно! Сейчас загрузим чаты";
            break;
        case "#signin":
            message.textContent = "Вы успешно зарегистрировались, переходим на страницу входа";
            break;
        case "#changepass":
            message.textContent = "Вы поменяли пароль. Возвращаемся в профиль";
            break;
        case "#forgotpass":
            message.textContent = "Пароль будет отправлен на вашу почту";
            break;

    }

    let inputs = Array.from(document.getElementsByTagName("input"));
    let vals = [];
    let keys = [];
    let result: Record<string | number, any> = {};

    inputs.forEach(element => {
        vals.push(element.value);
        keys.push(element.name);
    });

    for (let i = 0; i < vals.length; i++) {
        result[keys[i]] = vals[i];
    };

    console.log(result);

    setTimeout(function () {

        switch (location.hash) {
            case "#login":
                location.hash = "#chats";
                break;
            case "#signin":
                location.hash = "#login";
                break;
            case "#changepass":
                location.hash = "#myprofile";
                break;
            case "#forgotpass":
                location.hash = "#login";
                break;

        }

    }, 3000)

}
