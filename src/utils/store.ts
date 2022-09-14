import { set } from "./minor-functions/set";
import { PlainObject } from "../types";
import { EventBus } from "./event-bus";
import { ChatsProps, InitChatProps, UserProps } from "./../APItypes";

export enum StoreEvents {
  Updated = "updated",
  UserSet = "userSet",
  ChatListSet = "chatListSet",
  ThisChatSet = "thisChatSet",
  NewLocSet = "newLocSet",
}

export type StoreState = {
  chatlist?: ChatsProps[],
  initChat?: InitChatProps,
  user?: UserProps,
  chat?: ChatsProps,
  someAction?: boolean,
  newLoc?: string,
  thisChat?: {
    id: number;
    token: string;
  }
}

class Store extends EventBus {
  //private state: PlainObject = {};
  private state: PlainObject | StoreState = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }

  public setUser(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.UserSet);
  }

  public setChatList(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.ChatListSet);
  }

  public setThisChat(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.ThisChatSet);
  }

  public setNewLoc(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.NewLocSet);
  }

  public clear() {
    this.state = {};
  }
}

export default new Store();
