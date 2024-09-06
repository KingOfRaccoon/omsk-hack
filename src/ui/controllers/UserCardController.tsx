import {FC} from "react";
import {useUser} from "../../domain/hooks/useUser.ts";
import {Success} from "../../api/result.ts";

export const UserCardController: FC = () => {
    const user = useUser();

    if (user instanceof Success){
        return <div>Success</div>
    } else if (user instanceof Error) {
        return <div>Error.</div>
    } else {
        return <div>Loading...</div>
    }
}