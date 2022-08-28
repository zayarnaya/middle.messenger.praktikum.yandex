import { router } from "../../consts";
import { data } from "../../data";
import { APIurls } from "../../types";
import { HTTPTransport } from "../http-transport";
import store from "../store";

const request = new HTTPTransport;
const prefix = "https://ya-praktikum.tech/api/v2/";

const userFields = [
    "id",
    "first_name",
    "second_name",
    "display_name",
    "login",
    "email",
    "phone",
    "avatar",
    "isLoaded"
];

export class UserAuthController {
    /*
    методы:
    getUser()
    signUp()
    login()

    */



    public async getUser() {
        //let state = {};
        return request.get(APIurls.GETUSER, {
        });
        // .then(response => {
        //     if(response.status == 200) {
        //     let adata = JSON.parse(response.response);
        //     console.log(adata, "ДЖЕЙСОН");
        //     store.set("user", adata);

        //     /*
        //     Object.entries(adata).forEach(entry => {
        //         store.set(entry[0] as string, entry[1]);
        //     });
        //     */

        //     //console.log(store.getState(), "УШЛО В СТЕЙТ");
        //     //state = store.getState();
        //     //console.log(state, "ДОЛЖНО БЫ УЙТИ");
        //     //return state;
            
                        
        //     } else if (response.status != 200) {
        //         console.log(response.status, response.response);
        //     }
        // });
        //console.log(store.getState(), "ВНИЗУ Ф");
        //console.log(state, "state внизу фы");
        //return state;
    }

    public async login(data) {
        request.post(APIurls.LOGIN, {
            headers: undefined,
            method: undefined,
            data: data
        })
        .then(response => {
            if(response.status == 200) {
                //let adata = JSON.parse(response.response);
                //store.set("user", adata);
                //document.location.pathname = "/chats";
                router.go("/chats");
            } else if (response.status != 200) {
                console.log(response.status, response.response);
            }
        })
    }


    public async signUp(data) {
        request.post(APIurls.SIGNUP, {
            headers: undefined,
            method: undefined,
            data: data
        })
        .then(response => {
            if(response.status == 200) {
                let id = JSON.parse(response.response);
                this.UserID = id.id;
                console.log(this.UserID);
                router.go('/profile');
            } else if (response.status != 200) {
                console.log(response.status, response.response);
            }
        })
    }


    public async logOut() {
        request.post(APIurls.LOGOUT, {})
        .then(response => {
            if(response.status == 200) {
              router.go("/logout");
            } else if (response.status != 200) {
              console.log(response, "Что-ТО НЕ ТАК");
            }
          })
    }
  
      public async profile(data?: any) {
            try {
                // Запускаем крутилку            
    
                //const validateData = userLoginValidator(data);
    
                //if (!validateData.isCorrect) {
                //    throw new Error(validateData);
                //}
            
                //const userID = loginApi.request(prepareDataToRequest(data));
                userProfileApi.create()
                .then(response => {
                  console.log(response.response, response.status);
                  if(response.status == 200) {
                    let data = JSON.parse(response.response);
                    console.log(data, "DATA");
                    this.id = data.id;
                    this.first_name = data.first_name;
                    this.second_name = data.second_name;
                    this.display_name = data.display_name;
                    this.login = data.login;
                    this.email = data.email;
                    this.phone = data.phone;
                    this.avatar = data.avatar;
                    console.log(this.second_name);
                    this.isLoaded = true;
  
                  }
                  
                });
                
                
    
                //router.go('/login');
    
                // Останавливаем крутилку
            } catch (error) {
                console.log("АШИПКА");
        }
      }
  
      //public getUser() {
       //   UserAPI.getUser()
       //            .then(data => store.set('user', data);
      //  }
    } 
