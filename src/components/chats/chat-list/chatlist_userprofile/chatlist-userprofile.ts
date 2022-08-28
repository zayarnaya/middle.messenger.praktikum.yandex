import { Block } from "../../../../utils/block";
import userProfile from "./chatlist-userprofile.hbs";
import { ChatlistUserprofileProps } from "../../../../types";
import store, { StoreEvents } from "../../../../utils/store";
import { UserAuthController } from "../../../../utils/controllers/userAuthController";

export class ChatlistUserprofile extends Block<
  ChatlistUserprofileProps,
  ChatlistUserprofile
> {
  public constructor(
    tag: string,
    props: ChatlistUserprofileProps,
    classname?: string
  ) {
    super(tag, props, false, classname);


  const getUserInfo = new UserAuthController;
  const user = getUserInfo.getUser()
  .then(response => {
    if(response.status == 200) {
    let adata = JSON.parse(response.response);
    store.set("user", adata);
    } else {
      console.log(response.status, response.response);
    }
  });
  
  store.on(StoreEvents.Updated, () => {
    // вызываем обновление компонента, передав данные из хранилища
    let newProps = store.getState();
    console.log(!!newProps.user.avatar, "ЕСТЬ ЛИ АВАТАР");
    let avatar: string;
    if(!newProps.user.avatar) {
      avatar = "https://www.fillmurray.com/g/100/100";
    } else {
      avatar = newProps.user.avatar;
    }

    let name = newProps.user.display_name
    ? newProps.user.display_name
    : `${newProps.user.first_name} ${newProps.user.second_name}`;
    this.setProps({
      avatar: avatar,
      name: name
    });

    });

    
  }

  public render() {
    return this.compile(userProfile, this.props);
  }
}
