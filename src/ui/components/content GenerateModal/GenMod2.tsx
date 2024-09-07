import save from "../../../assets/save.svg";
import {GenModProps} from "./GenMod1.tsx";

export default function GenMod2(props: GenModProps) {
    return <div>

        {/*из файла -2- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 1 из 3</small>
        </div>

        <div className="border-gradient border-gradient-purple mt-5 mx-5 p-5">
            <h3>Загрузите сюда исходный файл</h3>
            <button
                className="align-items-center hstack m-0 p-2 px-3 bg-grey-3 br-36 align-items-center mx-auto mt-3 mb-2"
                onClick={props.nextPage}>
                <div className="text-start">
                    <h3 className="fc-fio">Выбрать файл</h3>
                </div>
                <div className="icon-box ms-2">
                    <img src={save} alt=""/>
                </div>
            </button>
            <p className="fc-grey-20 mt-3">Выберите pdf, doc, docs файл или перетащите сюда</p>
        </div>

    </div>
}