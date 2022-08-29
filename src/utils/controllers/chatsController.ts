import { router } from "../../consts";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";
import store from "../store";


const request = new HTTPTransport;


export class ChatsController {
    /*
    методы:
    create
    delete
    invite
    getChats
    */

    public async create(data: {title: string}) {
        request.post(APIurls.CREATECHAT, {data: data})
        .then(response => {
        if(response.status == 200) {
            store.set("chat", data);
            console.log("чат сделали");


        } else if (response.status != 200) {
            console.log(response.status, response.response);
        }

        });

    }

    public async delete(data: {id: number}) {
        request.delete(APIurls.CHATS, {data: data})
        .then(response => {
        if(response.status == 200) {

            console.log("чат удалили");
            console.log(response.response);
            router.go("/chats");


        } else if (response.status != 200) {
            console.log(response.status, response.response);
        }

        });

    }

    public async invite(data: {
        users: number[],
        chatId: number
    }) {
        request.put(APIurls.CHATUSERS, {data: data})
        .then(response => {
        if(response.status == 200) {
            console.log("позвали юзера");          

        } else if (response.status != 200) {
            console.log(response.status, response.response);
        }

        });

    }

    public async getChats(
        offset?: number,
        limit?: number,
        title?: string
    ) {
        let data: {
            offset?: number,
            limit?: number,
            title?: string
        } = {};
        if(!!offset || !!limit || !!title) {
            if(!!offset) {
                data.offset = offset;
            };
            if(!!limit) {
                data.limit = limit;
            };
            if(!!title) {
                data.title = title;
            };
        }
        return request.get(APIurls.CHATS, !!data
            ? {data}
            : data);

    }

    public async getChatUsers(chatID: number) {
        return request.get(`${APIurls.CHATS}/${chatID}/users`, {})
        // .then(response => {
        //     if(response.status == 200) {
        //         console.log("позвали юзера");          
    
        //     } else if (response.status != 200) {
        //         console.log(response.status, response.response);
        //     }
    
        //     });

    }

    public async deleteChatUsers(data: string) {
        //let adata = JSON.stringify(data);
        request.delete(APIurls.CHATUSERS, {data: data})
        .then(response => {
            if(response.status == 200) {
                console.log("убрали юзера");          
    
            } else if (response.status != 200) {
                console.log(response.status, response.response);
            }
    
            });

    }


    } 
