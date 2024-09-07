import {useUserStore} from "../../data/stores/useUserStore.ts";
import {AuthenticationData} from "../models/AuthenticationData.ts";

export const useAuthenticationUser = () => {
    const authenticationUser = useUserStore(state => state.authenticationUser);

    return (authenticationData: AuthenticationData) => {
        return useUserStore(state => state.user);
    }
}