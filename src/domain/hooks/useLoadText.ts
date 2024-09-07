import {usePresentationStore} from "../../data/stores/usePresentationStore.ts";
import {useTokenStore} from "../../data/stores/useTokenStore.ts";

export const useLoadText = () => {
    const loadText = usePresentationStore(state => state.loadText)
    const getToken = useTokenStore(state => state.getToken)

    return (text: string) => {
        loadText(text, getToken())
    }
}