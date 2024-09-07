import {GenModProps} from "./GenMod1.tsx";
import {Upload} from "../Upload.tsx";

export default function GenMod2(props: GenModProps) {
    return <div>
        {/*из файла -2- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 1 из 3</small>
        </div>

        <div className="border-gradient border-gradient-purple mt-5 mx-5 p-5">
            <h3>Загрузите сюда исходный файл</h3>
            <Upload nextPage={props.nextPage}/>
            <p className="fc-grey-20 mt-3">Выберите pdf, doc, docx файл или перетащите сюда</p>
        </div>

    </div>
}