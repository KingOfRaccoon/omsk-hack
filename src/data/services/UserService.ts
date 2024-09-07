import {postman} from "../../api/postman.ts";
import {AuthenticationData} from "../../domain/models/AuthenticationData.ts";
import {User} from "../../domain/models/User.ts";
import {RegistrationData} from "../../domain/models/RegistrationData.ts";

class UserService {
    private baseUrl = "http://213.171.10.242/api/v1/auth";
    private authTag = "/authenticate";
    private registrationTag = "/register";
    private authOnTokenTag = "";

    async authenticateUser(authenticationData: AuthenticationData) {
        return await postman.post<User>(this.baseUrl, this.authTag, null, authenticationData);
    }

    async registrationUser(registrationData: RegistrationData) {
        return await postman.post<User>(this.baseUrl, this.registrationTag, null, registrationData);
    }

    async authenticateUserOnToken(token: string) {
        return await postman.post<User>(this.baseUrl, this.authOnTokenTag, token)
    }
}

export const userService = new UserService();