import {Loading, Result, Success} from "../../api/result.ts";
import {User} from "../../domain/models/User.ts";
import {create} from "zustand";
import {AuthenticationData} from "../../domain/models/AuthenticationData.ts";
import {userService} from "../services/UserService.ts";
import {RegistrationData} from "../../domain/models/RegistrationData.ts";
import {useTokenStore} from "./useTokenStore.ts";

interface UserStore {
    user: Result<User>,
    authenticationUser: (authenticationData: AuthenticationData) => void,
    registrationUser: (registrationData: RegistrationData) => void,
    authenticationUserOnToken: (token: string) => void
}

export const useUserStore = create<UserStore>()((set) => ({
    user: new Loading<User>(),
    authenticationUser: async (authenticationData: AuthenticationData) => {
        const user = await userService.authenticateUser(authenticationData);
        if (user instanceof Success<User>)
            useTokenStore(state => state.setToken)(user.data.token)

        set(() => ({ user: user }))
    },
    registrationUser: async (registrationData: RegistrationData) => {
        const user = await userService.registrationUser(registrationData);
        if (user instanceof Success<User>)
            useTokenStore(state => state.setToken)(user.data.token)

        set(() => ({ user: user }))
    },
    authenticationUserOnToken: async (token: string) => {
        const user = await userService.authenticateUserOnToken(token);
        if (user instanceof Success<User>)
            useTokenStore(state => state.setToken)(user.data.token)

        set(() => ({ user: user }))
    }
}))