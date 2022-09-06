import { router } from "../../consts";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";
import { UserProps } from "./../../APItypes";
import store from "../store";

const request = new HTTPTransport;

export class UserAuthController {


    public async getUser() {
        return request.get(APIurls.GETUSER, {
        });

    }

    public async login(data: {
        login: string,
        password: string
    }) {
        return request.post(APIurls.LOGIN, {
            headers: undefined,
            method: undefined,
            data: JSON.stringify(data)
        });

    }


    public async signUp(data: UserProps) {
        return request.post(APIurls.SIGNUP, {
            headers: undefined,
            method: undefined,
            data: JSON.stringify(data)
        });

    }


    public async logOut() {
        request.post(APIurls.LOGOUT, {})
        .then(response => {
            if(response.status == 200) {
                localStorage.clear();
                store.clear();
              router.go("/logout");
            } else if (response.status != 200) {
              return;
            }
          })
    }
  
   } 
