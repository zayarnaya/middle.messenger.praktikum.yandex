import { ChangeUserProfile } from "./form-changeprofile";
import { render } from "../../../utils/renderDOM";
import { data } from "../../../data";
import { AvatarChange } from "../../avatars/change-avatar/change-avatar";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { MultiList } from "../../multi-list/multi-list";
import { layoutWideForm } from "../../../layouts/wide-form/wide-form";
import "./form-changeprofile.scss";
import { MultiListProps } from "../../../types";
import { FormChangeAvatar } from "../form-changeavatar/form-changeavatar";
import { ImageAvatar } from "../../avatars/img-avatar/img-avatar";
import store, { StoreEvents } from "../../../utils/store";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { defaulAvatar, filePrefix } from "../../../consts";

export function changeProfilePage() {
  let controller = new UserAuthController;
  let userDetails = {};
  console.log(store.getState(), "СТЕЙТТТТТТТ");
  
  // controller.getUser()
  // .then(response => {
  //   if(response.status == 200) {
  //     let adata = JSON.parse(response.response);
  //     Object.entries(adata).forEach(entry => {
  //       userDetails[entry[0]] = entry[1];
  //       localStorage.setItem(`user_${entry[0]}`, entry[1]);
  //     });


  //   } else {
  //     console.log(response);
  //   }
  // })
  let inputDummy = data.input.change_profile;
  Object.entries(inputDummy).forEach(entry => {
    let newvalue = localStorage.getItem(`user_${entry[0]}`);
    if(entry[0] == "display_name" && newvalue == "null") {
      let name = localStorage.getItem("user_first_name");
      let surname = localStorage.getItem("user_second_name");
      newvalue = `${name} ${surname}`;
    }
    console.log(newvalue, typeof newvalue);
    entry[1].value = newvalue;
  });

  let profileAvatar: string;
  let avatarRaw: string = localStorage.getItem(`user_avatar`)
  ? localStorage.getItem(`user_avatar`)
  : "";
  console.log(localStorage.getItem(`user_avatar`));
  if(avatarRaw == "null") {
    profileAvatar = defaulAvatar;
  } else if (avatarRaw != "null") {
    profileAvatar = `${filePrefix}${avatarRaw}`
  } else if(avatarRaw.length == 0) {
    profileAvatar = defaulAvatar;
  };
  console.log(avatarRaw);

  //console.log(inputDummy);
  //console.log(userDetails);
  //console.log(localStorage.getItem("user_first_name"), "ИНТЕРЕСНО ЧТО ЕСТЬ В ЛОКАЛ");

  //let inputs: HTMLInputElement[] = Object.values(data.input.change_profile);
  let inputs: HTMLInputElement[] = Object.values(inputDummy);
  let theChildren: MultiListProps = {};

  theChildren = inputs.reduce((theChildren, item, i) => {
    theChildren[`input${i}`] = new InputField(item);
      return theChildren;
   }, {});

  layoutWideForm();

  const avatar = new FormChangeAvatar({
    avatar: new ImageAvatar({
      avatar: profileAvatar,
      name: "Мой аватар"
    }),
    input: new InputField({
      name: "avatar",
      type: "file",
      label: "загрузите новый аватар",

    }),
    button: new Button({
      name: "submit-avatar",
      label: "Отправить",
      type: "submit"
    })
  });


  const form = new ChangeUserProfile({
    button: new Button(data.button.changeSubmit),
    inputList: new MultiList(theChildren, "div", ""),
  });
  
  //render(".wrapper-all-center", form);
  render(".form__placeholder", form);
  render(".avatar__placeholder", avatar);

  // store.on(StoreEvents.Updated, () => {
  //   avatar.children.avatar.setProps({avatar: `${filePrefix}${localStorage.getItem("user_avatar")}`})
  // });

  
}
