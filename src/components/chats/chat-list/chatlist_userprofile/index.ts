import Handlebars from "handlebars";
import userProfile from "./chatlist-userprofile.hbs";

export function partialUserProfile() {
    return Handlebars.registerPartial("userprofile", userProfile);
    
}
