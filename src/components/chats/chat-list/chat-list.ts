import { SearchForm } from "../../forms/form-search/form-search";
import { data } from "../../../data";
import { ChatListLeftPanel } from "./chat-list-layout/chat-list-layout";
import { ChatListMenu } from "./chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./chatlist_userprofile/chatlist-userprofile";
import { render } from "../../../utils/renderDOM";
import { InputField } from "../../input/input-field";
import { Button } from "../../buttons/button-submit/button";
import { ChatListItem } from "./chatlist-item/chatlist-item";
import { MultiList } from "../../multi-list/multi-list";
import { ChatListItemProps, MultiListProps } from "../../../types";
import "./../../../style.scss";
import { UniversalController } from "../../../utils/controllers/universal";
import store, { StoreEvents } from "../../../utils/store";
import { ChatController } from "../../../utils/controllers/chatController";
import { isEmpty } from "../../../utils/minor-functions/isEmpty";
import { Block } from "../../../utils/block";

export function buildLeftPanel() {
  //const chats: ChatListItemProps[] = Object.values(data.chats);
  //const theChildren: Record<string, ChatListItem> = {};
  //const ids = [];

  const getChats = new ChatController;
  const chats = getChats.getChats(0, 10);

  /*
  for (let i = 0; i < chats.length; i++) {
    let key = `chat${i}`;
    let val = chats[i];
    let child = new ChatListItem(val);
    let obj = { [key]: child };
    let id = child._id;

    ids.push(id);
    Object.assign(theChildren, obj);
  }
  */

  const panel = new ChatListLeftPanel(
    "div",
    {
      chatListMenu: new ChatListMenu(
        "nav",
        {
          chatuserprofile: new ChatlistUserprofile(
            "div",
            {
              avatar: data.user.avatar,
              name: data.user.profile.display_name.value,
              link: data.user.link,
            },
            "chat-list__profile"
          ),

          formsearch: new SearchForm({
            input: new InputField({
              type: "search",
              placeholder: "Поиск",
            }),
            button: new Button({
              class: "chat-list__searchform-button",
            }),
          }),
        },
        "chat-list__menu"
      ),
      //chatList: new MultiList(theChildren, "ul", "chat-list__list_unmarked"),
      //chatList: "Пока чатов нет"
      //chatList: new MultiList({0: new ChatListItem({})}, "ul", "chat-list__list_unmarked")
      chatList: new ChatListItem({
        name: "test",
        unread: 0,
        title: "обратно тест",
        chatID: 0,
      })
    },
    "chat-list"
  );

  render(".chat-list-wrapper", panel);

  store.on(StoreEvents.Updated, () => {
    // вызываем обновление компонента, передав данные из хранилища
   setTimeout(() => {

    let chats = store.getState().chatlist;
    if(!!isEmpty(chats)) {
      return;
    }

    console.log(chats);

    let theChildren: Record<string, ChatListItem> = {};

    chats.forEach((chat, index) => {
      if(!isEmpty(chat.last_message)) {
      theChildren[index] = new ChatListItem( {
        profile: `/users/${chat.last_message.user.login}`,
        avatar: chat.avatar,
        name: `${chat.last_message.user.first_name} ${chat.last_message.user.second_name}`,
        lastMessage: chat.last_message.content,
        timestamp: chat.last_message.time,
        unread: chat.unread_count,
        title: chat.title,
        chatID: chat.id
      })
    
  } else if (!!isEmpty(chat.last_message)) {
    theChildren[index] = new ChatListItem( {
      avatar: chat.avatar,
      title: chat.title,
      unread: 0,
      chatID: chat.id
    });

  }
    });
    let newList = new MultiList(theChildren, "ul", "chat-list__list_unmarked");
    render(".chat-list__list", newList);
    
    /*
    panel.setProps({
      //chatList: newList
      //chatList: "sakjdgh"
      chatList: new ChatListItem( {

        title: "сирано тест",
        unread: 20,
        chatID: 152
      })
    });
    panel.props.chatList = new ChatListItem( {

      title: "сирано тест",
      unread: 20,
      chatID: 152
    });//очень загадочно
    //console.log(panel.props.chatList);
    */


  }, 0);
  //console.log(newState, "NEW STATE");
    //console.log(newState, "NEWSTATE");
    /*
 type ChatListItemProps = {
    profile: URL;
    avatar: string;
    name: string;
    lastMessage: string | HTMLElement;
    timestamp: string;
    unread: number;
*/
  
    /*
    let avatar = newProps.user.avatar
    ? newProps.user.avatar
    : "https://www.fillmurray.com/g/100/100";
    let name = newProps.user.display_name
    ? newProps.user.display_name
    : `${newProps.user.first_name} ${newProps.user.second_name}`;
    this.setProps({
      avatar: avatar,
      name: name
    });
    console.log("СТОР ОБНОВИЛСЯ");
    console.log(store.getState());
    console.log(this.props, "PROPS");
    //this.children.avatar.setProps({name: this.props.user.first_name});
    //let fields = this.children.charList.children;
    //Object.values(fields).forEach(value => {
      //console.log(value.props);
      //console.log(value.props.value, "ПРОПСЫ ИНПУТОВ");
      //console.log(value.props.id, "НАЗВАНИЯ");
      //let id = value.props.id;
      //let newval = this.props.user[`${id}`];
      //console.log(this.props.user[`${id}`]);
      //console.log(newval);
      //value.setProps({value: newval});
      */
    });
}
