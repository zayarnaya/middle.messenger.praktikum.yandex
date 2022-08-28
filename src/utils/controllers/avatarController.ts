import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";

const request = new HTTPTransport;


export class AvatarController {
    /*
    методы:
change
chatavatar
    */

    public async change(data: FormData) {
        request.put(APIurls.CHANGEAVATAR, {data: data})
        .then(response => {
        if(response.status == 200) {
            //store.set("chat", data);
            console.log(response);


        } else if (response.status != 200) {
            console.log(response.status, response.response);
            console.log(response);
        }

        });

    }

    } 
