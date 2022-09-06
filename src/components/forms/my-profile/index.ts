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
import { defaulAvatar, filePrefix, router } from "../../../consts";
import { logOut } from "../../../utils/logout";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import store, { StoreEvents } from "../../../utils/store";
import { UserProps } from "../../../APItypes";

export function profilePage() {
  let chars: ProfCharProps[] = Object.values(data.profile_char);

  let theChildren = {};

  theChildren = chars.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new ProfChar(item);
    return theChildren;
  }, {});

  layoutWideForm();
  const form = new MyUserProfile({
    avatar: new ProfAvatar({
      avatar: defaulAvatar,
      name: "Me",
    }),
    charList: new MultiList(theChildren, "div", "profile__chars col"),
    linkChangeProfile: new ProfileLink({
      text: "Изменить данные профиля",
      link: "/settings",
      events: {
        click: (e: Event) => {
          e.preventDefault();
          router.go("/settings");
        },
      },
    }),
    linkChangePassword: new ProfileLink({
      text: "Изменить пароль",
      link: "/changepass",
      events: {
        click: (e: Event) => {
          e.preventDefault();
          router.go("/changepass");
        },
      },
    }),
    linkLogout: new ProfileLink({
      text: "Выйти",
      link: "/logout",
      classname: "color-red",
      events: {
        click: (e: Event) => {
          e.preventDefault();
          logOut();
        },
      },
    }),
  });

  render(".wrapper-all-center", form);

  let getuser = new UserAuthController();
  getuser.getUser().then((response) => {
    if (response.status == 200) {
      let adata = JSON.parse(response.response);
      store.set("user", adata);
    } else {
      return;
    }
  });
  store.on(StoreEvents.Updated, () => {
    // вызываем обновление компонента, передав данные из хранилища
    const user: UserProps = store.getState().user as UserProps;
    if (!user) {
      return;
    }
    let newAvatar = user.avatar ? `${filePrefix}${user.avatar}` : defaulAvatar;

    let nickname = user.display_name
      ? user.display_name
      : `${user.first_name} ${user.second_name}`;

    form.children.avatar.setProps({
      avatar: newAvatar,
      name: nickname,
    });

    let fields = form.children.charList.children;

    Object.values(fields).forEach((value) => {
      let id = value.props.id;
      let newval = user[`${id}`];
      value.setProps({ value: newval });
    });
  });
}
