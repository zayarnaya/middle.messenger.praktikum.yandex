import { data } from "../../data";
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

export class UniversalController {
    /*
    методы:
    getUser()
    signUp()
    login()

    */



    public getUser() {
        let state = {};
        request.get(`${prefix}auth/user`, {
        })
        .then(response => {
            if(response.status == 200) {
            let adata = JSON.parse(response.response);
            //console.log(adata, "ДЖЕЙСОН");
            store.set("user", adata);

            /*
            Object.entries(adata).forEach(entry => {
                store.set(entry[0] as string, entry[1]);
            });
            */

            //console.log(store.getState(), "УШЛО В СТЕЙТ");
            state = store.getState();
            //console.log(state, "ДОЛЖНО БЫ УЙТИ");
            //return state;
            
                        
            } else if (response.status != 200) {
                console.log(response.status, response.response);
            }
        });
        //console.log(store.getState(), "ВНИЗУ Ф");
        //console.log(state, "state внизу фы");
        //return state;
    }

    public login(data) {
        request.post(`${prefix}auth/signin`, {
            headers: undefined,
            method: undefined,
            data: data
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
