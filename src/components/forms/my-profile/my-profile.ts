import { Block } from "../../../utils/block";
import myProfile from "./my-profile.hbs";
import { MyUserProfileProps } from "../../../types";
import "./my-profile.scss";
import store, { StoreEvents } from "../../../utils/store";
import { UserAuthController } from "../../../utils/controllers/userAuthController";
import { defaulAvatar, filePrefix } from "../../../consts";

export class MyUserProfile extends Block<MyUserProfile> {
  public constructor(propsAndChildren: MyUserProfileProps) {
    super("div", propsAndChildren, false, "profile-wrapper");
    // let getuser = new UserAuthController();
    // getuser.getUser().then((response) => {
    //   if (response.status == 200) {
    //     let adata = JSON.parse(response.response);
    //     console.log("ПОЛУЧИЛИ ДАННЫЕ");
    //     store.set("user", adata);
    //   } else {
    //     return;
    //   }
    // });
    // store.on(StoreEvents.Updated, () => {
    //   console.log("ОТКРЫЛСЯ СТОР");
    //   // вызываем обновление компонента, передав данные из хранилища
    //   this.setProps(store.getState());
    //   let displayName = this.props.user.display_name;
    //   let name: string;
    //   if (!displayName || displayName == "null") {
    //     name = `${this.props.user.first_name} ${this.props.user.second_name}`;
    //   } else {
    //     name = displayName;
    //   }
    //   let propsAvatar = this.props.user.avatar;
    //   let avatar: string = propsAvatar
    //     ? `${filePrefix}${propsAvatar}`
    //     : defaulAvatar;
    //   this.children.avatar.setProps({ name: name, avatar: avatar });
    //   let fields = this.children.charList.children;
    //   Object.values(fields).forEach((value) => {
    //     let id = value.props.id;
    //     let newval = this.props.user[`${id}`];
    //     value.setProps({ value: newval });
    //   });
    // });
  }

  public render() {
    return this.compile(myProfile, this.props);
  }
}
