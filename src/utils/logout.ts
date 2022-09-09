import { UserAuthController } from "./controllers/userAuthController";

export function logOut() {
    let logout = new UserAuthController;
    logout.logOut();
}
