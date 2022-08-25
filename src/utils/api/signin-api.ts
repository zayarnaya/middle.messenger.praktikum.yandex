import { BaseAPI } from "./base-api";
import { HTTPTransport } from "../http-transport";
import { apiPrefix } from "../../consts";

const signAPIInstance = new HTTPTransport;
const signAPIURL = `${apiPrefix}/auth`;

export class SigninAPI extends BaseAPI {
    public request(data: any) {
      return signAPIInstance.post(`${signAPIURL}/signup`,   {
      data: data
})
      //.then(() => console.log("SIGNED IN"))

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
