import { Button } from "./components/buttons/button-submit/button";
import { MultiList } from "./components/multi-list/multi-list";
import { ChatListMenu } from "./components/chats/chat-list/chat-list-menu/chat-list-menu";
import { ChatlistUserprofile } from "./components/chats/chat-list/chatlist_userprofile/chatlist-userprofile";
import { ChatsMenu } from "./components/chats/chat-main/chat-main-menu/chat-main-menu";
import { FormMessage } from "./components/forms/form-message/form-message";
import { InputField } from "./components/input/input-field";
import { AvatarChange } from "./components/avatars/change-avatar/change-avatar";
import { ProfAvatar } from "./components/avatars/profile_avatar/profile-avatar";
import { ProfChar } from "./components/profile-chars/profile-char/profile-char";
import { ChatListItem } from "./components/chats/chat-list/chatlist-item/chatlist-item";
import { MenuItem } from "./components/chats/chat-main/chat-main-menu/menu-items/menu-item";
import { ProfileLink } from "./components/forms/my-profile/profile-links/profile-link";
import { ImageAvatar } from "./components/avatars/img-avatar/img-avatar";


export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum APIurls {
  BASE = "https://ya-praktikum.tech/api/v2",
  LOGIN = "https://ya-praktikum.tech/api/v2/auth/signin",
  SIGNUP = "https://ya-praktikum.tech/api/v2/auth/signup",
  GETUSER = "https://ya-praktikum.tech/api/v2/auth/user",
  GETUSERBYID = "https://ya-praktikum.tech/api/v2/user/",
  LOGOUT = "https://ya-praktikum.tech/api/v2/auth/logout",
  CHATS = "https://ya-praktikum.tech/api/v2/chats",
  CREATECHAT = "https://ya-praktikum.tech/api/v2/chats",
  CHATAVATAR = "https://ya-praktikum.tech/api/v2/chats/avatar",
  CHATUSERS = "https://ya-praktikum.tech/api/v2/chats/users",
  GETTOKEN = "https://ya-praktikum.tech/api/v2/chats/token/",
  CHANGEPROFILE = "https://ya-praktikum.tech/api/v2/user/profile",
  CHANGEPASS = "https://ya-praktikum.tech/api/v2/user/password",
  CHANGEAVATAR = "https://ya-praktikum.tech/api/v2/user/profile/avatar",
  SEEKUSER = "https://ya-praktikum.tech/api/v2/user/search",
}

export type PlainObject<T = unknown> = {
  [k in string]: T;
};

export type Options = {
  data?: any;
  timeout?: number | undefined;
  headers?: any;
  method?: Methods | undefined;
};

export type Events = {
  submit?: CallableFunction;
  focus?: CallableFunction;
  blur?: CallableFunction;
  click?: CallableFunction;
  hashchange?: CallableFunction;
};

export type AvatarProps = {
  avatar: string;
  name?: string;
};


export type ChangeAvatarProps = {
  input?: InputField;
  button?: Button;
};


export type AvatarImgProps = {
  avatar: string;
  events?: Events;
  eventTarget?: string;
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
  accept?: string;
};

export type ProfCharProps = {
  name: string;
  id: string;
  value: string;
};

export type ChatMessageProps = {
  avatar?: string;
  name?: string;
  message?: string | HTMLElement;
  time?: string;
  date?: string;
};

export type ErrorProps = {
  error_num: string | number;
  message: string;
  link_label: string;
};

export type MultiListProps = Record<
  string,
  InputField | ProfChar | ChatListItem | MenuItem
>;

export type ChatListMenuProps = {
  chatuserprofile: ChatlistUserprofile;
};

export type ChatListLeftPanelProps = {
  chatListMenu: ChatListMenu;
  chatList: MultiList | ChatListItem;
};

export type ChatlistUserprofileProps = {
  avatar: string;
  name: string;
  link: string;
};

export type ChatListItemProps = {
  profile?: string;
  avatar?: string;
  name?: string;
  lastMessage?: string | HTMLElement;
  timestamp?: string;
  unread?: number;
  title?: string;
  chatID?: number;
};

export type ChatRightPanelLayoutProps = {
  mainmenu: ChatsMenu;
  messagefield: FormMessage;
};

export type ChatsModalProps = {
  input?: InputField;
  button?: Button;
  avatar?: ImageAvatar;
};

export type ChatsMenuProps = {
  chatname: string;
  chatMenu: MultiList;
  actionsMenu: MultiList;
};

export type MenuItemProps = {
  text: string;
  id?: string;
  classname?: string;
  link?: string;
  events?: Events;
};

export type formChangePassProps = {
  avatar: AvatarChange;
  inputList: MultiList;
  button: Button;
};

export type FormProps = {
  avatar?: AvatarChange | ProfAvatar;
  avatarForm?: AvatarChange;
  inputList?: MultiList;
  button?: Button;
  input?: InputField;
  classname?: string;
};

export type MyUserProfileProps = {
  avatar: ProfAvatar;
  charList: MultiList;
  linkChangeProfile: ProfileLink;
  linkChangePassword: ProfileLink;
  linkLogout: ProfileLink;
};

export type LogoutProps = {
  classname: string;
  message: string;
  linkMessage: string;
  link: string;
};

export type Validity = "true" | "empty" | "wrong" | "noMatch";
