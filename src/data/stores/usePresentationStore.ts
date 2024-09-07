import {Presentation} from "../../domain/models/Presentation.ts";
import {PresentationData} from "../../domain/models/PresentationData.ts";
import {create} from "zustand";
import {Loading, Result} from "../../api/result.ts";
import {presentationService} from "../services/PresentationService.ts";
import {useTokenStore} from "./useTokenStore.ts";

interface PresentationStore {
    presentations: Result<Presentation[]>,
    newPresentation: Result<PresentationData>,
    newPresentationFile: Result<Presentation>,
    userFile: File | null,
    loadText: (text: string, token: string) => void,
    loadFile: (file: File, token: string) => void,
    loadEdited: (presentationData: PresentationData, token: string) => void,
    getPresentationsUser: (token: string) => void,
    getFileOnPresentation: (idPresentation: number) => void,
    setUserFile: (file: File) => void,
}

export const usePresentationStore = create<PresentationStore>()((set) => ({
    presentations: new Loading(),
    newPresentation: new Loading(),
    newPresentationFile: new Loading(),
    userFile: null,
    loadText: async (text: string) => {
        set(() => ({ newPresentation: new Loading()}))
        const presentation = await presentationService.loadText(text, useTokenStore(state => state.getToken)());

        set(() => ({ newPresentation: presentation }))
    },
    loadFile: async (file: File) => {
        set(() => ({ newPresentation: new Loading()}))
        const presentation = await presentationService.loadFile(file, useTokenStore(state => state.getToken)());

        set(() => ({ newPresentation: presentation }))
    },
    loadEdited: async (presentationData: PresentationData) => {
        set(() => ({ newPresentationFile: new Loading()}))
        const presentation = await presentationService.loadEdited(presentationData, useTokenStore(state => state.getToken)());

        set(() => ({ newPresentationFile: presentation }))
    },
    getPresentationsUser: async (token: string) => {
        set(() => ({ presentations: new Loading()}))
        const presentation = await presentationService.getPresentationsUser(token);

        set(() => ({ presentations: presentation }))
    },
    getFileOnPresentation: async (idPresentation: number) => {
        set(() => ({ newPresentationFile: new Loading()}))
        const presentation = await presentationService.getFileOnPresentation(idPresentation);

        set(() => ({ newPresentationFile: presentation }))
    },

    setUserFile: (file: File) => {
        set(() => ({ userFile: file}))
    }
}))