import {create} from "zustand";

interface TokenStore {
    getToken: () => string,
    setToken: (token: string) => void
}

export const useTokenStore = create<TokenStore>()(() =>({
    getToken: () => {
        const token = localStorage.getItem("token");
        return token ? token : ""
    },
    setToken: (token: string) => {
        localStorage.setItem("token", token)
    }
}))