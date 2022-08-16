import { Button } from "./components/buttons/button-submit/button";
import { SearchForm } from "./components/forms/form-search/form-search";
import { MultiList } from "./components/multi-list/multi-list";
import { ChatListMenu } from "./components/chats/chat-list/chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./components/chats/chat-list/chatlist_userprofile/chatlist-userprofile";
import { ChatMessageIn } from "./components/chats/chat-main/chat-message/chat-message-in/chat-message-in";
import { ChatMessageOut } from "./components/chats/chat-main/chat-message/chat-message-out/chat-message-out";
import { ChatsMenu } from "./components/chats/chat-main/chat-main-menu/chat-main-menu";
import { ChatsInnerField } from "./components/chats/chat-main/chat-main-inner/chat-main-inner";
import { FormMessage } from "./components/forms/form-message/form-message";
import { InputField } from "./components/input/input-field";
import { AvatarChange } from "./components/avatars/change-avatar/change-avatar";
import { ProfAvatar } from "./components/avatars/profile_avatar/profile-avatar";
import { ProfChar } from "./components/profile-chars/profile-char/profile-char";
import { ChatListItem } from "./components/chats/chat-list/chatlist-item/chatlist-item";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type Options = {
  headers: any;
  method: Methods;
  data?: any;
};

export type Events = {
  submit?: CallableFunction;
  focus?: CallableFunction;
  blur?: CallableFunction;
  click?: CallableFunction;
};

export type AvatarProps = {
  avatar: string;
  name?: string;
};

export type ButtonProps = {
  name?: string;
  label?: string;
  class?: string;
  type?: string;
};

export type InputFieldProps = {
  name?: string;
  type?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  checkPass?: boolean;
};

export type ProfCharProps = {
  name: string;
  id: string;
  value: string;
};

export type ChatMessageProps = {
  avatar: string;
  name: string;
  message: string | HTMLElement;
  time: string;
};

export type ErrorProps = {
  error_num: string | number;
  message: string;
  link_label: string;
};

export type MultiListProps = Record<
  string,
  InputField | ProfChar | ChatListItem
>;

export type ChatListMenuProps = {
  chatuserprofile: ChatlistUserprofile;
  formsearch: SearchForm;
};

export type ChatListLeftPanelProps = {
  chatListMenu: ChatListMenu;
  chatList: MultiList;
};

export type ChatlistUserprofileProps = {
  avatar: string;
  name: string;
  link: URL;
};

export type ChatListItemProps = {
  profile: URL;
  avatar: string;
  name: string;
  lastMessage: string | HTMLElement;
  timestamp: string;
  unread: number;
};

export type ChatsInnerFieldProps = {
  date: string;
  incoming: ChatMessageIn;
  outgoing: ChatMessageOut;
};

export type ChatRightPanelLayoutProps = {
  mainmenu: ChatsMenu;
  maininner: ChatsInnerField;
  messagefield: FormMessage;
};

export type ChatsMenuProps = {
  chatavatar: string;
  chatname: string;
};

export type formChangePassProps = {
  avatar: AvatarChange;
  inputList: MultiList;
  button: Button;
};

export type FormProps = {
  avatar?: AvatarChange | ProfAvatar;
  inputList?: MultiList;
  button?: Button;
  input?: InputField;
};

export type MyUserProfileProps = {
  avatar: ProfAvatar;
  charList: MultiList;
};

export type LogoutProps = {
  classname: string;
  message: string;
  linkMessage: string;
  link: string;
};

export type Validity = "true" | "empty" | "wrong" | "noMatch";
