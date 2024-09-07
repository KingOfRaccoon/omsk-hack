import { useState } from "react";

export default function useModal2() {
    const [isAllOpen, setIsAllOpen] = useState(false);

    const toggleAll = ()=> {
        setIsAllOpen(!isAllOpen);
    }

    return {
        isAllOpen,
        toggleAll
    };
}
