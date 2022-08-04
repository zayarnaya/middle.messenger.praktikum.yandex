//import { HTTPTransport } from "../http-transport";

export function sendRequest() {

}

export function getData() {

    let message: string = document.querySelector(".submit-message").textContent;
    switch(location.hash) {
        case "#login" :
            message = "Успешно! Сейчас загрузим чаты";
            break;
        case "#signin" :
            message = "Вы успешно зарегистрировались, переходим на страницу входа";
            break;
        case "#changepass" :
            message = "Вы поменяли пароль";
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
/*
    setTimeout(function() {

        switch(location.hash) {
            case "#login" :
                location.hash = "#chats";
                break;
            case "#signin" :
                location.hash = "#login";
                break;
            case "#changepass" :
                location.hash = "#myprofile";
                break;
                
        }
        
    }, 3000)*/

}
