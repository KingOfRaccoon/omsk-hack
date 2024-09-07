import React from 'react';
import save from "../../assets/save.svg";
import {usePresentationStore} from "../../data/stores/usePresentationStore.ts";
import {GenModProps} from "./content GenerateModal/GenMod1.tsx";

export const Upload = (props: GenModProps) => {
    const setUserFile = usePresentationStore(state => state.setUserFile)
    const fileInputRef = React.createRef<HTMLInputElement>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUserFile(e.target.files[0]);
            props.nextPage()
        }
    };

    return (
        <>
            <div className="input-group">
                <button
                    className="align-items-center hstack m-0 p-2 px-3 bg-grey-3 br-36 align-items-center mx-auto mt-3 mb-2"
                onClick={() => {if (fileInputRef.current) fileInputRef.current.click()}}>
                    <div className="text-start">
                        <h3 className="fc-fio">Выбрать файл</h3>
                    </div>
                    <div className="icon-box ms-2">
                        <img src={save} alt=""/>
                    </div>
                </button>
            </div>
            <input ref={fileInputRef} type="file" accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} hidden={true} />
        </>
    );
};
