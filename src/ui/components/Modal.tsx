import {ReactNode} from "react";
import xmark from "../../assets/xmark.svg";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay align-content-center">
                    <div className="modal-box">
                        {props.children}
                    </div>
                    <button onClick={props.toggle} className="icon-box bg-white">
                        <img src={xmark} alt=""/>
                    </button>
                </div>
            )}
        </>
    );
}
