import { router } from "../../consts";
import { ChatAPI } from "../api/chat-api";
import { SearchAPI } from "../api/search-api";

/*
interface loginProps {
    "login": string;
    "password": string;
}
*/

const searchApi = new SearchAPI();
const chatAPI = new ChatAPI;
//const userLoginValidator = validateLoginFields(validateRules);

export class ChatSettingsController {
    public async seek(data: any) {
          try {
              // Запускаем крутилку            
  
              //const validateData = userLoginValidator(data);
  
              //if (!validateData.isCorrect) {
              //    throw new Error(validateData);
              //}
          
              //const userID = loginApi.request(prepareDataToRequest(data));
              //const logging = loginApi.request(data)
              //console.log(logging);
              return searchApi.request(data);
              /*
              .then(response => {
                console.log(response.status, response.responseText, "RESPONSE");
                if(response.status != 200) {
                    console.log(JSON.parse(response.responseText));
                }
              })
              .then(() =>
               console.log("Я ОТПРАВИЛОСЯ")
              )
              */


  
              //router.go('/chats');
              //return logging;
  
              // Останавливаем крутилку
          } catch (error) {
              console.log("АШИПКА");
      }
    }

    public async create(data:any) {
      return chatAPI.create(data);
    }

    //public getUser() {
     //   UserAPI.getUser()
     //            .then(data => store.set('user', data);
    //  }
  } 
