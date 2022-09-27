export const data: Record<string, any> = {
  input: {
    login: {
      login: {
        name: "login",
        type: "text",
        label: "Логин",
        required: true,
        placeholder: " ",
      },

      password: {
        name: "password",
        type: "password",
        label: "Пароль",
        required: true,
        placeholder: " ",
      },
    },

    signin: {
      login: {
        name: "login",
        type: "text",
        label: "Логин",
        required: true,
        placeholder: " ",
      },

      first_name: {
        name: "first_name",
        type: "text",
        label: "Имя",
        required: true,
        placeholder: " ",
      },

      second_name: {
        name: "second_name",
        type: "text",
        label: "Фамилия",
        required: true,
        placeholder: " ",
      },

      email: {
        name: "email",
        type: "email",
        label: "Почта",
        required: true,
        placeholder: " ",
      },

      phone: {
        name: "phone",
        type: "tel",
        label: "Телефон",
        required: true,
        placeholder: " ",
      },

      password: {
        name: "password",
        type: "password",
        label: "Пароль",
        required: true,
        placeholder: " ",
      },

      password_check: {
        name: "password_check",
        type: "password",
        label: "Пароль еще раз",
        required: true,
        placeholder: " ",
        checkPass: true,
      },
    },

    change_signin: {
      oldPassword: {
        name: "oldPassword",
        type: "password",
        label: "Введите старый пароль",
        required: true,
        placeholder: " ",
      },

      newPassword: {
        name: "newPassword",
        type: "password",
        label: "Введите новый пароль",
        required: true,
        placeholder: " ",
      },

      newPassword2: {
        name: "newPassword2",
        type: "password",
        label: "Повторите новый пароль",
        required: true,
        placeholder: " ",
        checkPass: true,
      },
    },

    change_profile: {
      login: {
        name: "login",
        type: "text",
        label: "Логин",
        required: false,
        value: "",
      },

      display_name: {
        name: "display_name",
        type: "text",
        label: "Имя в чате",
        required: false,
        value: "",
      },

      first_name: {
        name: "first_name",
        type: "text",
        label: "Имя",
        required: false,
        value: "",
      },

      second_name: {
        name: "second_name",
        type: "text",
        label: "Фамилия",
        required: false,
        value: "",
      },

      email: {
        name: "email",
        type: "email",
        label: "Почта",
        required: false,
        value: "",
      },

      phone: {
        name: "phone",
        type: "tel",
        label: "Телефон",
        required: false,
        value: "",
      },
    },

    getNewPass: {
      login: {
        name: "recovery-login",
        type: "text",
        label: "Логин",
        required: true,
        placeholder: " ",
      },
    },

    search: {
      name: "search",
      type: "search",
      label: "Поиск",
      required: false,
      placeholder: "Поиск",
      attributes: {
        placeholder: "Поиск",
      },
    },
  },

  button: {
    loginSubmit: {
      name: "submit",
      label: "Войти",
      class: "submit-button",
    },

    signinSubmit: {
      name: "submit",
      label: "Создать аккаунт",
      class: "submit-button",
    },

    changeSubmit: {
      name: "submit",
      label: "Сохранить",
      class: "submit-button",
    },

    forgotpassSubmit: {
      name: "submit",
      label: "Отправить",
      class: "submit-button",
    },

    searchSubmit: {
      name: "submit",
      label: "",
      class: "chat-list__searchform-button",
    },
  },

  profile_char: {
    login: {
      name: "Логин",
      id: "login",
    },

    display_name: {
      name: "Имя в чате",
      id: "display_name",
    },

    first_name: {
      name: "Имя",
      id: "first_name",
    },

    second_name: {
      name: "Фамилия",
      id: "second_name",
    },

    email: {
      name: "Почта",
      id: "email",
    },

    phone: {
      name: "Телефон",
      id: "phone",
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
};
