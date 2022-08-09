import { Chat } from "../../chat";
import userProfile from "./chatlist-userprofile.hbs";
import { data } from "../../../../data";

export class ChatlistUserprofile extends Chat {
    constructor(tag:string, props, classname?: string) {
        super(tag, props, classname);
        
    }

    render() {
        return this.compile(userProfile, this.props.user);

    }
}
