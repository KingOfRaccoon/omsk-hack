import {postman} from "../../api/postman.ts";
import {AuthenticationData} from "../../domain/models/AuthenticationData.ts";
import {User} from "../../domain/models/User.ts";
import {RegistrationData} from "../../domain/models/RegistrationData.ts";

class UserService {
    private baseUrl = "";
    private authTag = "";
    private registrationTag = "";
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