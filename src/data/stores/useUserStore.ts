import {Loading, Result} from "../../api/result.ts";
import {User} from "../../domain/models/User.ts";
import {createStore} from "zustand";
import {AuthenticationData} from "../../domain/models/AuthenticationData.ts";
import {userService} from "../services/UserService.ts";
import {RegistrationData} from "../../domain/models/RegistrationData.ts";

interface UserStore {
    user: Result<User>,
    authenticationUser: (authenticationData: AuthenticationData) => void,
    registrationUser: (registrationData: RegistrationData) => void,
    authenticationUserOnToken: (token: string) => void
}

const useUserStore = createStore<UserStore>()((set) => ({
    user: new Loading<User>(),
    authenticationUser: async (authenticationData: AuthenticationData) => {
        const user = await userService.authenticateUser(authenticationData);

        set(() => ({ user: user }))
    },
    registrationUser: async (registrationData: RegistrationData) => {
        const user = await userService.registrationUser(registrationData);

        set(() => ({ user: user }))
    },
    authenticationUserOnToken: async (token: string) => {
        const user = await userService.authenticateUserOnToken(token);

        set(() => ({ user: user }))
    }
}))