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
import left from "../assets/left.svg";
import right from "../assets/right.svg";

import GenerateModalBody from "../ui/components/GenerateModalBody.tsx";
import CreateModalBody from "../ui/components/CreateModalBody.tsx";
import TemplateModalBody from "../ui/components/TemplateModalBody.tsx";

// import Swiper JS
// import Swiper from 'swiper';

// import Swiper styles
// import 'swiper/css';
// import '../../src/ui/components/swiper.js'

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
                            <h3>Семенова Ирина Петровна</h3>
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
                {/*НЕТ ПРЕЗ*/}
                <div className="container p-3 pe-2 bg-white br-36">
                    <div className="container text-start">
                        <h3>Мои презентации</h3>
                    </div>
                    <h3 className="fc-grey-20 mt-4">У вас еще нет презентаций :(</h3>
                    <button className="align-items-center hstack m-0 p-3 bg-grey-30 br-36 align-items-center mx-auto mt-3 mb-2">
                        <div className="text-start">
                            <h3 className="fc-fio">Создать</h3>
                        </div>
                        <div className="icon-box ms-2">
                            <img src={plus} alt=""/>
                        </div>
                    </button>
                </div>

                    {/*ЕСТЬ ПРЕЗы*/}
                <div className="container p-3 pe-2 bg-white br-36">
                    <div className="container hstack">
                        <h3>Мои презентации</h3>
                        <a><small className="fc-fio ms-3">Все</small></a>
                        <div className="icon-box ms-auto">
                            <img src={left} alt=""/>
                        </div>
                        <div className="icon-box ms-3">
                            <img src={right} alt=""/>
                        </div>
                    </div>

                    <div>
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">Slide 1</div>
                                <div className="swiper-slide">Slide 2</div>
                                <div className="swiper-slide">Slide 3</div>
                                ...
                            </div>
                            <div className="swiper-pagination"></div>

                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                            <div className="swiper-scrollbar"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isGenerateOpen} toggle={toggleGenerate}>
                <GenerateModalBody/>
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