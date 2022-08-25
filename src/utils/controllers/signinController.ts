import { SigninAPI } from "../api/signin-api";
import { router } from "../../consts";


const signinApi = new SigninAPI();
//const userLoginValidator = validateLoginFields(validateRules);

export class SigninController {
  UserID = null;
    public async signin(data: any) {
          try {
              // Запускаем крутилку            
  
              //const validateData = userLoginValidator(data);
  
              //if (!validateData.isCorrect) {
              //    throw new Error(validateData);
              //}
          
              //const userID = loginApi.request(prepareDataToRequest(data));
              signinApi.request(data)
              .then(response => {
                console.log(response.response);
                if(response.status == 200) {
                  let id = JSON.parse(response.response);
                  this.UserID = id.id;
                  console.log(this.UserID);
                  router.go('/profile');
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
