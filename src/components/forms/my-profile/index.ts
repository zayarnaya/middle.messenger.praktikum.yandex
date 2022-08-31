import { MyUserProfile } from "./my-profile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { ProfAvatar } from "../../avatars/profile_avatar/profile-avatar";
import { ProfChar } from "../../profile-chars/profile-char/profile-char";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import { MultiList } from "../../multi-list/multi-list";
import "./my-profile.scss";
import { ProfCharProps } from "../../../types";
import { ProfileLink } from "./profile-links/profile-link";


export function profilePage() {
  //const getProfData = new UniversalController;
  //getProfData.getUser();
  //console.log(getProfData.getUser(), "ДОЛЖНО БЫ ПРИЙТИ");


  //const getProfileData = new UserProfileController;
  //"https://www.fillmurray.com/g/100/100" аватар по умолчанию

  //let profData = getProfileData.profile();
  let chars: ProfCharProps[] = Object.values(data.profile_char);
  //console.log(getProfileData.login);
  //if(!!getProfileData.isLoaded){console.log("ЗАГРУЗИЛОСЯ", getProfileData.login);}
  /*
  let chars: ProfCharProps[] = Object.values({
    login: {
      name: "Логин",
      id: "login",
      value: getProfileData.login,
  },

  display_name: {
      name: "Имя в чате",
      id: "display_name",
      value: getProfileData.display_name,
  },

  first_name: {
      name: "Имя",
      id: "first_name",
      value: getProfileData.first_name,
  },

  second_name: {
      name: "Фамилия",
      id: "second_name",
      value: getProfileData.second_name,
  },

  email: {
      name: "Почта",
      id: "email",
      value: getProfileData.email,
  },

  phone: {
      name: "Телефон",
      id: "phone",
      value: getProfileData.phone,
  },
  });
  */
  
  let theChildren = {};

  theChildren = chars.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new ProfChar(item);
      return theChildren;
   }, {});

   
  layoutWideForm();
  const form = new MyUserProfile({
    avatar: new ProfAvatar({
      avatar: data.user.avatar,
      name: data.user.profile.display_name.value,
    }),
    charList: new MultiList(theChildren, "div", "profile__chars col"),
    linkChangeProfile: new ProfileLink({
      text: "Изменить данные профиля",
      link: "/settings"
    }),
    linkChangePassword: new ProfileLink({
      text: "Изменить пароль",
      link: "/changepass"
    }),
    linkLogout: new ProfileLink({
      text: "Выйти",
      classname: "color-red",
    })
  });
  
  render(".wrapper-all-center", form);
}
