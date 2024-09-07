import {usePresentationStore} from "../../data/stores/usePresentationStore.ts";

export function useGetPresentations() {
    return usePresentationStore(store => store.presentations)
}