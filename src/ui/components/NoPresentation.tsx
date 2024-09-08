import plus from "../../assets/plus.svg";
import useModal2 from "../../domain/hooks/useModel2.ts";
import Modal from "./Modal.tsx";
import TemplateModalBody from "./TemplateModalBody.tsx";


export function NoPresentation() {
    const {isAllOpen, toggleAll} = useModal2()
    return <div className="App">
        <div className="container-fluid p-0 hstack gap-3"
             style={(isAllOpen) ? {filter: 'blur(15px)'} : {}}>

            <div className="container p-3 pe-2 bg-white br-36">
                <div className="container text-start">
                    <h3>Мои презентации</h3>
                </div>
                <h3 className="fc-grey-20 mt-4">У вас еще нет презентаций :(</h3>
                <button
                    className="align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto mt-3 mb-2"
                    onClick={toggleAll}>
                    <div className="text-start">
                        <h3 className="fc-blue">Создать</h3>
                    </div>
                    <div className="icon-box ms-2">
                        <img src={plus} alt=""/>
                    </div>
                </button>
            </div>
        </div>
        <Modal isOpen={isAllOpen} toggle={toggleAll}>
            <TemplateModalBody/>
        </Modal>
    </div>
}