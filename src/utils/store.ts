import { set } from "./minor-functions/set";
import { PlainObject } from "../types";
import { EventBus } from "./event-bus";

export enum StoreEvents {
  Updated = "updated",
  UserSet = "userSet",
  ChatListSet = "chatListSet",
  ThisChatSet = "thisChatSet",
  NewLocSet = "newLocSet",
}

class Store extends EventBus {
  private state: PlainObject = {};

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
