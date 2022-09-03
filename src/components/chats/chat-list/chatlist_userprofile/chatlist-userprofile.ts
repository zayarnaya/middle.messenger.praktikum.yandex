import { Block } from "../../../../utils/block";
import userProfile from "./chatlist-userprofile.hbs";
import { ChatlistUserprofileProps } from "../../../../types";
import store, { StoreEvents } from "../../../../utils/store";
import { UserAuthController } from "../../../../utils/controllers/userAuthController";
import { defaulAvatar, filePrefix } from "../../../../consts";
import { UserProps } from "../../../../APItypes";

export class ChatlistUserprofile extends Block<ChatlistUserprofile> {
  public constructor(
    tag: string,
    props: ChatlistUserprofileProps,
    classname?: string
  ) {
    super(tag, props, false, classname);

    const getUserInfo = new UserAuthController();
    getUserInfo.getUser().then((response) => {
      if (response.status == 200) {
        let adata = JSON.parse(response.response);
        store.set("user", adata);
      } else {
        return;
      }
    });

    store.on(StoreEvents.Updated, () => {
      let newProps: UserProps = store.getState().user as UserProps;
      if (!newProps) {
        return;
      }
      let avatar: string = newProps.avatar
        ? `${filePrefix}${newProps.avatar}`
        : defaulAvatar;

      let name = newProps.display_name
        ? newProps.display_name
        : `${newProps.first_name} ${newProps.second_name}`;
      this.setProps({
        avatar: avatar,
        name: name,
      });
    });
  }

  public render() {
    return this.compile(userProfile, this.props);
  }
}
