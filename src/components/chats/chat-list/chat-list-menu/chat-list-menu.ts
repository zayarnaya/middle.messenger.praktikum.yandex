import { Chat } from "../../chat";
import chatListMenu from "./chat-list-menu.hbs";
import { data } from "../../../../data";
import userProfile from "../chatlist_userprofile/chatlist-userprofile.hbs";
import formSearch from "../../../forms/form-search/form-search.hbs";

export class ChatListMenu extends Chat {
    constructor(tag: string, props) {
        super(tag, props);
    }

    render() {
        //let profile = userProfile(this.props);
        //let search = formSearch(this.props.input.search);
        return this.compile(chatListMenu, {
            //chatuserprofile: profile,
            //formsearch: search
        });
    }
}
