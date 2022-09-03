import { router } from "../../consts";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";
import store from "../store";

const request = new HTTPTransport();

export class ChatsController {
  public async create(data: { title: string }) {
    request.post(APIurls.CREATECHAT, { data: data }).then((response) => {
      if (response.status == 200) {
        store.set("chat", data);
      } else if (response.status != 200) {
        return;
      }
    });
  }

  public async delete(data: { id: number }) {
    request.delete(APIurls.CHATS, { data: data }).then((response) => {
      if (response.status == 200) {
        router.go("/chats");
      } else if (response.status != 200) {
        return;
      }
    });
  }

  public async invite(data: { users: number[]; chatId: number }) {
    request.put(APIurls.CHATUSERS, { data: data });
  }

  public async getToken(id: string | number) {
    return request.post(
      `https://ya-praktikum.tech/api/v2/chats/token/${id}`,
      {}
    );
  }

  public async getChats(offset?: number, limit?: number, title?: string) {
    let data: {
      offset?: number;
      limit?: number;
      title?: string;
    } = {};
    if (!!offset || !!limit || !!title) {
      if (!!offset) {
        data.offset = offset;
      }
      if (!!limit) {
        data.limit = limit;
      }
      if (!!title) {
        data.title = title;
      }
    }
    return request.get(APIurls.CHATS, !!data ? { data } : data);
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
