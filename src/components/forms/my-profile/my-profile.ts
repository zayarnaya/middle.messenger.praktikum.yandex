import { Block } from "../../../utils/block";
import myProfile from "./my-profile.hbs";
import { MyUserProfileProps } from "../../../types";
import "./my-profile.scss";

export class MyUserProfile extends Block<MyUserProfileProps, MyUserProfile> {
  public constructor(propsAndChildren: MyUserProfileProps) {
    super("div", propsAndChildren, false, "profile-wrapper");
  }

  public render() {
    return this.compile(myProfile, this.props);
  }
}
