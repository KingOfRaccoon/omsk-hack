import {usePresentationStore} from "../../data/stores/usePresentationStore.ts";
import {useTokenStore} from "../../data/stores/useTokenStore.ts";

export const useLoadFile = () => {
    const loadFile = usePresentationStore(state => state.loadFile)
    const getToken = useTokenStore(state => state.getToken)

    return (file: File) => {
        loadFile(file, getToken())
    }
}