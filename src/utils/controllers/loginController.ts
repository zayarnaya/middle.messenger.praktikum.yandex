import { LoginAPI } from "../api/login-api";
import { router } from "../../consts";

/*
interface loginProps {
    "login": string;
    "password": string;
}
*/

const loginApi = new LoginAPI();
//const userLoginValidator = validateLoginFields(validateRules);

export class LoginController {
    public async login(data: any) {
          try {
              // Запускаем крутилку            
  
              //const validateData = userLoginValidator(data);
  
              //if (!validateData.isCorrect) {
              //    throw new Error(validateData);
              //}
          
              //const userID = loginApi.request(prepareDataToRequest(data));
              //const logging = loginApi.request(data)
              //console.log(logging);
              loginApi.request(data)
              .then(response => {
                console.log(response.status, response.responseText, "RESPONSE");
                if(response.status != 200) {
                    console.log(console.log(response, "ЧТО-ТО НЕ ТАК"));
                }
              })
              .then(() =>
               console.log("Я ОТПРАВИЛОСЯ")
              )


  
              router.go('/chats');
              //return logging;
  
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
