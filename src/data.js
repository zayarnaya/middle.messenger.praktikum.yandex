export const data = {
    input: {
        login: {
            login: {
                name: "login",
                type: "text",
                label: "Логин",
                required: true,
                attributes: {
                    pattern: "[a-zA-Z]{1,20}",
                    maxLength: "16",
                },
            },

            password: {
                name: "password",
                type: "password",
                label: "Пароль",
                required: true,
            },
        },

        signin: {
            login: {
                name: "login",
                type: "text",
                label: "Логин",
                required: true,
                attributes: {
                    pattern: "[a-zA-Z]{1,20}",
                    maxLength: "16",
                },
            },

            first_name: {
                name: "first_name",
                type: "text",
                label: "Имя",
                required: true,
                attributes: {
                    maxLength: "50",
                },
            },

            second_name: {
                name: "second_name",
                type: "text",
                label: "Фамилия",
                required: true,
                attributes: {
                    maxLength: "50",
                },
            },

            email: {
                name: "email",
                type: "email",
                label: "Почта",
                required: true,
            },

            phone: {
                name: "phone",
                type: "tel",
                label: "Телефон",
                required: true,
                attributes: {
                    pattern: "[0-9]{10}",
                },
            },

            password: {
                name: "password",
                type: "password",
                label: "Пароль",
                required: true,
                attributes: {},
            },

            password_check: {
                name: "password_check",
                type: "password",
                label: "Пароль еще раз",
                required: true,
                attributes: {},
            }
        },

        change_signin: {
            oldPassword: {
                name: "oldPassword",
                type: "password",
                label: "Введите старый пароль",
                required: true,
            },

            newPassword: {
                name: "newPassword",
                type: "password",
                label: "Введите новый пароль",
                required: true,
            },

            newPassword2: {
                name: "newPassword2",
                type: "password",
                label: "Повторите новый пароль",
                required: true,
            },
        },

        change_profile: {
            login: {
                name: "login",
                type: "text",
                label: "Логин",
                required: false,
                value: "phil",
                attributes: {
                    pattern: "[a-zA-Z]{1,20}",
                    maxLength: "16",
                },
            },

            display_name: {
                name: "display_name",
                type: "text",
                label: "Имя в чате",
                required: false,
                value: "Punxsutawney Phil",
            },

            first_name: {
                name: "first_name",
                type: "text",
                label: "Имя",
                required: false,
                value: "Phil",
            },

            second_name: {
                name: "second_name",
                type: "text",
                label: "Фамилия",
                required: false,
                value: "Punxsutawney",
            },

            email: {
                name: "email",
                type: "email",
                label: "Почта",
                required: false,
                value: "phil@Punxsutawney.org",
            },

            phone: {
                name: "phone",
                type: "tel",
                label: "Телефон",
                required: false,
                value: "9161234567",
                attributes: {
                    pattern: "[0-9]{10}",
                },
            },
        },

        getNewPass: {
            login: {
                name: "recovery-login",
                type: "text",
                label: "Логин",
                required: true,
                attributes: {
                    pattern: "[a-zA-Z]{1,20}",
                    maxLength: "16",
                },
            },
        },
    },

    button: {
        loginSubmit: {
            name: "submit",
            label: "Войти",
        },

        signinSubmit: {
            name: "submit",
            label: "Создать аккаунт",
        },

        changeSubmit: {
            name: "submit",
            label: "Сохранить",
        },

        forgotpassSubmit: {
            name: "submit",
            label: "Отправить",
        },
    },

    profile_char: {
        login: {
            name: "Логин",
            id: "login",
            value: "phil",
        },

        display_name: {
            name: "Имя в чате",
            id: "display_name",
            value: "Punxsutawney Phil",
        },

        first_name: {
            name: "Имя",
            id: "first_name",
            value: "Phil",
        },

        second_name: {
            name: "Фамилия",
            id: "second_name",
            value: "Punxsutawney",
        },

        email: {
            name: "Почта",
            id: "email",
            value: "Phil@Punxsutawney.org",
        },

        phone: {
            name: "Телефон",
            id: "phone",
            value: "+7-916-123-4567",
        },
    },

    avatar: {
        profile: {
            image: "files/lee.jpg",
            display_name: "Punxsutawney Phil",
        },
    },

    chats: {
        1: {
            name: "Торин",
            profile: "profile.html",
            avatar: "https://www.fillmurray.com/110/110",
            last_message: "Hey Thranduil! Long time no see!",
            timestamp: "06:12",
            unread: "2",
        },

        2: {
            name: "Бильбо",
            profile: "profile.html",
            avatar: "https://www.fillmurray.com/100/100",
            last_message: "Hey Thranduil! Miss those barrels already?",
            timestamp: "10:00",
            unread: "1",
        },

        3: {
            name: "Саурон",
            profile: "profile.html",
            avatar: "https://www.fillmurray.com/60/60",
            last_message: "Отдайте кольцо...",
            timestamp: "11:54",
            unread: "3",
        },
    },

    user: {
        profile: {
            login: {
                name: "Логин",
                id: "login",
                value: "phil",
            },

            display_name: {
                name: "Имя в чате",
                id: "display_name",
                value: "Punxsutawney Phil",
            },

            first_name: {
                name: "Имя",
                id: "first_name",
                value: "Phil",
            },

            second_name: {
                name: "Фамилия",
                id: "second_name",
                value: "Punxsutawney",
            },

            email: {
                name: "Почта",
                id: "email",
                value: "Phil@Punxsutawney.org",
            },

            phone: {
                name: "Телефон",
                id: "phone",
                value: "+7-916-123-4567",
            },
        },

        link: "#myprofile",

        avatar: "https://www.fillmurray.com/g/100/100",
    },

    users: {
        1: {
            display_name: {
                name: "Имя в чате",
                id: "display_name",
                value: "Торин",
            },

            first_name: {
                name: "Имя",
                id: "first_name",
                value: "Thorin",
            },

            second_name: {
                name: "Фамилия",
                id: "second_name",
                value: "Oakenshield",
            },

            email: {
                name: "Почта",
                id: "email",
                value: "thorin@moriah.orc",
            },

            phone: {
                name: "Телефон",
                id: "phone",
                value: "+7-916-123-6543",
            },
        },

        2: {
            display_name: {
                name: "Имя в чате",
                id: "display_name",
                value: "Бильбо",
            },

            first_name: {
                name: "Имя",
                id: "first_name",
                value: "Bilbo",
            },

            second_name: {
                name: "Фамилия",
                id: "second_name",
                value: "Baggins",
            },

            email: {
                name: "Почта",
                id: "email",
                value: "bilbo@sheer.hob",
            },

            phone: {
                name: "Телефон",
                id: "phone",
                value: "+7-916-345-6543",
            },
        },

        3: {
            display_name: {
                name: "Имя в чате",
                id: "display_name",
                value: "Саурон",
            },

            first_name: {
                name: "Имя",
                id: "first_name",
                value: "Sauron",
            },

            second_name: {
                name: "Фамилия",
                id: "second_name",
                value: "",
            },

            email: {
                name: "Почта",
                id: "email",
                value: "sauron@hobbits-suck.orc",
            },

            phone: {
                name: "Телефон",
                id: "phone",
                value: "+7-800-666-6666",
            },
        },
    },

    errors: {
        404: {
            error_num: "404",
            message: "Ой! Поворот не туда",
            link_label: "Вернуться",
        },

        500: {
            error_num: "500",
            message: "Ой! Что-то сломалось. Мы уже чиним",
            link_label: "Вернуться",
        },
    },

    forms: {
        login: {
            legend: {
                h3_message: "Вход",
                message: 'или <a href="signin.html">регистрация</a>',
            },
        },
    },
};
