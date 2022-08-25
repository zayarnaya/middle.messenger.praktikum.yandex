import { Block } from "../../../utils/block";
import myProfile from "./my-profile.hbs";
import { MyUserProfileProps } from "../../../types";
import "./my-profile.scss";
import store, { StoreEvents } from "../../../utils/store";
import { UniversalController } from "../../../utils/controllers/universal";

export class MyUserProfile extends Block<MyUserProfileProps, MyUserProfile> {
  public constructor(propsAndChildren: MyUserProfileProps) {
    super("div", propsAndChildren, false, "profile-wrapper");
    let getuser = new UniversalController;
    let user = getuser.getUser();
    //console.log(this.children);
    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
      //console.log("СТОР ОБНОВИЛСЯ");
      //console.log(store.getState());
      //console.log(this.props);
      this.children.avatar.setProps({name: this.props.user.first_name});
      let fields = this.children.charList.children;
      Object.values(fields).forEach(value => {
        //console.log(value.props);
        //console.log(value.props.value, "ПРОПСЫ ИНПУТОВ");
        //console.log(value.props.id, "НАЗВАНИЯ");
        let id = value.props.id;
        let newval = this.props.user[`${id}`];
        //console.log(this.props.user[`${id}`]);
        //console.log(newval);
        value.setProps({value: newval});
      });

        });
        //console.log(this.children.avatar.props);
        //console.log(this.props, "ПРОПС");
        //if(!!this.props.user.avatar && !!this) {
        //this.children.avatar.setProps({avatar: this.props.user.avatar, name: this.props.user.})}
        //this.children.avatar.setProps({name: this.props.user.first_name});
  }

  public render() {
    return this.compile(myProfile, this.props);
  }
}
