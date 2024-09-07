import {postman} from "../../api/postman.ts";
import {PresentationTextData} from "../../domain/models/PresentationTextData.ts";
import {PresentationData} from "../../domain/models/PresentationData.ts";
import {Presentation} from "../../domain/models/Presentation.ts";

class PresentationService {
    private baseUrl = "";
    private loadTextTag = "";
    private loadFileTag = "";
    private loadEditedTag = "";
    private getPresentationsUserTag = "";
    private getFileOnPresentationTag = "";

    async loadText(text: string, token: string) {
        return postman.post<PresentationData>(this.baseUrl, this.loadTextTag, token, new PresentationTextData(text));
    }

    async loadFile(file: File, token: string) {
        return postman.postFile<PresentationData>(this.baseUrl, this.loadFileTag, file, token);
    }

    async loadEdited(presentationData: PresentationData, token: string) {
        return postman.post<Presentation>(this.baseUrl, this.loadEditedTag, token, presentationData);
    }

    async getPresentationsUser(token: string) {
        return postman.get<Presentation[]>(this.baseUrl, this.getPresentationsUserTag, {}, {}, token)
    }

    async getFileOnPresentation(idPresentation: number) {
        return postman.get<Presentation>(
            this.baseUrl,
            this.getFileOnPresentationTag,
            {"idPresentation": idPresentation}
        );
    }
}

export const presentationService = new PresentationService();