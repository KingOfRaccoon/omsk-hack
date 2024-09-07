import {Presentation} from "../../domain/models/Presentation.ts";
import {PresentationData} from "../../domain/models/PresentationData.ts";
import {create} from "zustand";
import {Loading, Result} from "../../api/result.ts";
import {presentationService} from "../services/PresentationService.ts";

interface PresentationStore {
    presentations: Result<Presentation[]>,
    newPresentation: Result<PresentationData>,
    newPresentationFile: Result<Presentation>,
    loadText: (text: string, token: string) => void,
    loadFile: (file: File, token: string) => void,
    loadEdited: (presentationData: PresentationData, token: string) => void,
    getPresentationsUser: (token: string) => void,
    getFileOnPresentation: (idPresentation: number) => void
}

export const usePresentationStore = create<PresentationStore>()((set) => ({
    presentations: new Loading(),
    newPresentation: new Loading(),
    newPresentationFile: new Loading(),
    loadText: async (text: string, token: string) => {
        set(() => ({ newPresentation: new Loading()}))
        const presentation = await presentationService.loadText(text, token);

        set(() => ({ newPresentation: presentation }))
    },
    loadFile: async (file: File, token: string) => {
        set(() => ({ newPresentation: new Loading()}))
        const presentation = await presentationService.loadFile(file, token);

        set(() => ({ newPresentation: presentation }))
    },
    loadEdited: async (presentationData: PresentationData, token: string) => {
        set(() => ({ newPresentationFile: new Loading()}))
        const presentation = await presentationService.loadEdited(presentationData, token);

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
}))