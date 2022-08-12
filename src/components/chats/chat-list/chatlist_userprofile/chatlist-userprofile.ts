import { Block } from "../../../../utils/block";
import userProfile from "./chatlist-userprofile.hbs";
import { ChatlistUserprofileProps } from "../../../../types";

export class ChatlistUserprofile extends Block<ChatlistUserprofileProps> {
    public constructor(tag:string, props: ChatlistUserprofileProps, classname?: string) {
        super(tag, props, false, classname);       
    }

    public render() {
        return this.compile(userProfile, this.props);
    }
}
