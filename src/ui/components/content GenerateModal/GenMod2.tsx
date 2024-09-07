import save from "../../../assets/save.svg";

export default function GenMod2({}) {
    return <div>

        {/*из файла -2- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 1 из 3</small>
        </div>

        <div className="border-gradient border-gradient-purple mt-3 p-5">
            <h3>Загрузите сюда исходный файл</h3>
            <button
                className="align-items-center hstack m-0 p-2 px-3 bg-grey-30 br-36 align-items-center mx-auto mt-3 mb-2">
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