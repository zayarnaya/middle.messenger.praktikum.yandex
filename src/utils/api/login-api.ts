import { BaseAPI } from "./base-api";
import { HTTPTransport } from "../http-transport";
import { apiPrefix } from "../../consts";

const authAPIInstance = new HTTPTransport;
const authAPIURL = `${apiPrefix}/auth`;

type loginProps = {
    login: string,
    password: string
}

export class LoginAPI extends BaseAPI {
    public request(data: loginProps) {
        console.log("LOGIN_API");
        console.log(`${authAPIURL}/signin`, data);
        
      return authAPIInstance.post(`${authAPIURL}/signin`,   {
        headers: undefined,
      method: undefined,
      timeout: 3000,
      data: data
})
      //.then(() => console.log("LOGGED IN"))
      //.then(response => console.log(response.status, response.responseText, "RESPONSE"));

      //  .then(({user_id}) => user_id); // Обрабатываем получение данных из сервиса далее
    
    }
  } 

/*
export class LoginAPI extends BaseAPI {
    user: loginProps;
    public constructor(props: loginProps) {
        super();
        this.user = props;
    }
    public request() {
      return authAPIInstance.post('/signin',   {
        headers: undefined,
      method: undefined,
      timeout: 3000,
      data: this.user})
      .then()

      //  .then(({user_id}) => user_id); // Обрабатываем получение данных из сервиса далее
    }
  } 
  */
