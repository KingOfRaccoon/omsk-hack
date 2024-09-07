import {useTokenStore} from "../../data/stores/useTokenStore.ts";
import {useUserStore} from "../../data/stores/useUserStore.ts";
import {AuthenticationData} from "../models/AuthenticationData.ts";

export const useAuthenticationUser = () => {
    const setToken = useTokenStore(state => state.setToken);
    const authenticationUser = useUserStore(state => state.authenticationUser);

    return (authenticationData: AuthenticationData) => {
        const user
    }
}