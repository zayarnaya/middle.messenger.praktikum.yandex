import { APIurls, Methods } from "../../types";
import { HTTPTransport } from "../http-transport";

const request = new HTTPTransport;


export class AvatarController {
    /*
    методы:
change
chatavatar
    */

    public async change(data: FormData) {
        request.file(APIurls.CHANGEAVATAR, {
            //headers: "Content-Type: form/multipart",
            data})
        .then(response => {
        if(response.status == 200) {
            //store.set("chat", data);
            console.log(response);


        } else if (response.status != 200) {
            console.log(response.status, response.response);
            console.log(response);
        }

        });

        // request.request(APIurls.CHANGEAVATAR, {
        //     headers: { "Content-Type": "form/multipart" },
        //     method: Methods.PUT,
        //     data: new FormData(form),
        // })
        // .then(response => console.log(response));


        // const xhr = new XMLHttpRequest();
        // xhr.open("PUT", APIurls.CHANGEAVATAR);
        // xhr.setRequestHeader("Content-Type", "form/multipart");
        // xhr.withCredentials = true;
        // xhr.send(data);

        // xhr.onload = function () {
        //     console.log(xhr.response);
        //   };



        //     
          

    }

    } 
