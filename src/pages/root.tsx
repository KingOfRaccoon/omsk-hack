import "./root.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "../assets/Icon.svg";
import icontitle from "../assets/presentationAI.svg";
import isearch from "../assets/search.svg";
import imgPerson from "../assets/imgPerson.png";
import settings from "../assets/setting.svg";
import home from "../assets/home.svg";
import gen from "../assets/gen.svg";
import create from "../assets/edit_circle.svg";
import chartPie from "../assets/pie-chart.svg";
import clock from "../assets/clock_circle.svg";
import file from "../assets/textСlean.svg";
import useModal from "../domain/hooks/useModel.ts";
import Modal from "../ui/components/Modal.tsx";
import link from "../assets/link.svg";
import plus from "../assets/plus.svg";

import CreateModalBody from "../ui/components/CreateModalBody.tsx";
import TemplateModalBody from "../ui/components/TemplateModalBody.tsx";
import PresentationsController from "../ui/controllers/PresentationsController.tsx";
import {GenerateModalController} from "../ui/controllers/GenerateModalController.tsx";

const HeaderRoot = () => {
    const {isGenerateOpen, toggleGenerate, isCreateOpen, toggleCreate, isTemplateOpen, toggleTemplate} = useModal()
    return (
        <div className="App">
            <div className="container-fluid hstack gap-3"
                 style={(isGenerateOpen || isCreateOpen || isTemplateOpen) ? {filter: 'blur(15px)'} : {}}>

            {/*LEFT PANEL*/}
            <div className="col-xxl-3 col-xl-3 col-sm-3 m-0 vstack gap-3">

                    {/*LOGO + search*/}
                    <div className="container hstack gap-3 p-3 bg-white br-36">
                        <img src={icon} alt=""/>
                        <img src={icontitle} alt=""/>
                        <button className="icon-box ms-auto">
                            <img src={isearch} alt=""/>
                        </button>
                    </div>

                    {/*Person*/}
                    <div className="container vstack gap-2 p-3 bg-white br-36">
                        <div className="container hstack gap-3 p-0 mb-2">
                            <img src={imgPerson} alt=""/>
                            <h3 className="text-start">Семенова Ирина Петровна</h3>
                            <button className="icon-box ms-auto">
                                <img src={settings} alt=""/>
                            </button>
                        </div>

                    {/*MENU ITEMS*/}
                    <div className="container menu-item hstack gap-3 br-36 px-2 py-2">
                        <div className="icon-box ">
                            <img src={home} alt=""/>
                        </div>
                        <h4>Главная</h4>
                    </div>
                    <div className="container menu-item hstack gap-3 br-36 px-2 py-2">
                        <div className="icon-box ">
                            <img src={file} alt=""/>
                        </div>
                        <h4>Черновики</h4>
                    </div>
                    <div className="container menu-item hstack gap-3 br-36 px-2 py-2">
                        <div className="icon-box ">
                            <img src={clock} alt=""/>
                        </div>
                        <h4>Недавние</h4>
                    </div>
                </div>

                {/*TEAM ACTIVITies*/}
                <div className="container vstack gap-2 p-3 bg-white br-36">
                    <div className="container menu-item hstack gap-3 br-36 px-2 py-2">
                        <div className="icon-box ">
                            <img src={plus} alt=""/>
                        </div>
                        <h4>Создать команду</h4>
                    </div>
                    <div className="container menu-item hstack gap-3 br-36 px-2 py-2">
                        <div className="icon-box ">
                            <img src={link} alt=""/>
                        </div>
                        <h4>Присоединиться к команде</h4>
                    </div>
                </div>
            </div>

                {/*RIGHT PANEL*/}
                <div className="col-xxl-9 col-xl-9 col-sm-9 m-0 vstack gap-3">

                    {/*TOP BUTTONs*/}
                    <div className="container hstack gap-3 p-0">

                        <button className="menu-button container p-3 bg-white br-36 align-items-center"
                                onClick={toggleGenerate}>
                            <div className="icon-box">
                                <img src={gen} alt=""/>
                            </div>
                            <div className="align-items-center align-content-start text-start">
                                <h3>Сгенерировать</h3>
                                <small className="fc-grey-50">из файла pdf/docx</small>
                            </div>
                        </button>

                        <button className="menu-button container p-3 bg-white br-36 align-items-center"
                                onClick={toggleCreate}>
                            <div className="icon-box">
                                <img src={create} alt=""/>
                            </div>
                            <div className="align-items-center align-content-start text-start">
                                <h3>Создать</h3>
                                <small className="fc-grey-50">из текста</small>
                            </div>
                        </button>

                        <button className="menu-button container p-3 bg-white br-36 align-items-center"
                                onClick={toggleTemplate}>
                            <div className="icon-box">
                                <img src={chartPie} alt=""/>
                            </div>
                            <div className="align-items-center align-content-start text-start">
                                <h3>Все шаблоны</h3>
                                <small className="fc-grey-50">выбрать и использовать</small>
                            </div>
                        </button>

                    </div>

                {/* MAIN */}
                <PresentationsController/>
                </div>
            </div>
            <Modal isOpen={isGenerateOpen} toggle={toggleGenerate}>
                <GenerateModalController/>
            </Modal>

            <Modal isOpen={isCreateOpen} toggle={toggleCreate}>
                <CreateModalBody/>
            </Modal>

            <Modal isOpen={isTemplateOpen} toggle={toggleTemplate}>
                <TemplateModalBody/>
            </Modal>
        </div>
    );
}

const Root = () => {
    return <><HeaderRoot/>
        {/*<li>Error.....................</li>*/}
    </>
}

export default Root;