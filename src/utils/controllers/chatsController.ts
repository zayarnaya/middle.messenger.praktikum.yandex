import { getChatsData } from "../../APItypes";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";

const request = new HTTPTransport();

export class ChatsController {
  public async create(data: { title: string }) {
    return request.post(APIurls.CREATECHAT, { data: JSON.stringify(data) })
  }

  public async delete(data: { chatId: number }) {
    return request.delete(APIurls.CHATS, { data: JSON.stringify(data) });
  }

  public async invite(data: { users: number[]; chatId: number }) {
    return request.put(APIurls.CHATUSERS, { data: JSON.stringify(data) });
  }

  public async getToken(id: string | number) {
    return request.post(`${APIurls.GETTOKEN}${id}`, {});
  }

  public async getChats(data?: getChatsData) {    
    return request.get(APIurls.CHATS, { data: data });
  }

  public async seekChats(data: {
    title: string,
  }) {
    return request.get(APIurls.CHATS, { data: data });
  }

  public async getChatUsers(chatID: number) {
    return request.get(`${APIurls.CHATS}/${chatID}/users`, {});
  }

  public async deleteChatUsers(data: { users: number[]; chatId: number }) {
    request.delete(APIurls.CHATUSERS, { data: JSON.stringify(data) });
  }

  public async changeChatAvatar(data: FormData) {
    return request.file(APIurls.CHATAVATAR, { data: data });
  }
}
