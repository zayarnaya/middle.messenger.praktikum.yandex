import { Chat } from "../../chat";
import userProfile from "./chatlist-userprofile.hbs";

export class ChatlistUserprofile extends Chat {
    constructor(tag:string, props: Object, classname?: string) {
        super(tag, props, classname);
        this.props = props;
        
    }

    render() {
        return this.compile(userProfile, this.props);
    }
}
