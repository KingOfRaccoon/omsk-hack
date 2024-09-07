import plus from "../../assets/plus.svg";

export function NoPresentation() {
    return <div className="container p-3 pe-2 bg-white br-36">
        <div className="container text-start">
            <h3>Мои презентации</h3>
        </div>
        <h3 className="fc-grey-20 mt-4">У вас еще нет презентаций :(</h3>
        <button className="align-items-center hstack m-0 p-3 bg-grey-30 br-36 align-items-center mx-auto mt-3 mb-2">
            <div className="text-start">
                <h3 className="fc-blue">Создать</h3>
            </div>
            <div className="icon-box ms-2">
                <img src={plus} alt=""/>
            </div>
        </button>
    </div>
}