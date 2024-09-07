import {usePresentationStore} from "../../data/stores/usePresentationStore.ts";
import {useTokenStore} from "../../data/stores/useTokenStore.ts";
import {PresentationData} from "../models/PresentationData.ts";

export const useEditedPresentation = () => {
    const loadEdited = usePresentationStore(state => state.loadEdited)
    const getToken = useTokenStore(state => state.getToken)

    return (presentationData: PresentationData) => {
        loadEdited(presentationData, getToken())
    }
}