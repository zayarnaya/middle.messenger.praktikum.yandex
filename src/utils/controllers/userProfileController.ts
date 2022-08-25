import { UserProfileAPI } from "../api/user-profile-api";
import { router } from "../../consts";


const userProfileApi = new UserProfileAPI;
//const userLoginValidator = validateLoginFields(validateRules);

export class UserProfileController {
  //UserID = null;
  id: number = 0;
  first_name: string = "Иван";
  second_name = "Иванов";
  display_name = this.first_name + " " + this.second_name;
  login: string = "ivan";
  email = "my@email.com";
  phone = 89223332211;
  avatar: string = "";
  isLoaded = false;

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
