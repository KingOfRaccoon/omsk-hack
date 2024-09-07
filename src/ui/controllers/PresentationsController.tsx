import {Presentations} from "../components/Presentations.tsx";
import {NoPresentation} from "../components/NoPresentation.tsx";
import {useGetPresentations} from "../../domain/hooks/useGetPresentations.ts";
import {Success} from "../../api/result.ts";

export default function PresentationsController() {
    const presentations = useGetPresentations()

    // if (presentations instanceof Success && presentations.data.length > 0)
        return <Presentations/>
    // else
    //     return <NoPresentation/>
}