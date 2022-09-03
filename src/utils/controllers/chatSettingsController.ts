import { ChatAPI } from "../api/chat-api";
import { SearchAPI } from "../api/search-api";

const searchApi = new SearchAPI();
const chatAPI = new ChatAPI;

export class ChatSettingsController {
    public async seek(data: any) {
          try {
              return searchApi.request(data);
              
          } catch (error) {
              return;
      }
    }

    public async create(data:any) {
      return chatAPI.create(data);
    }
 
  } 
