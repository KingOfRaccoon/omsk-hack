import {useUserStore} from "../../data/stores/useUserStore.ts";

export const useUser = () => {
    return useUserStore(state => state.user);
}