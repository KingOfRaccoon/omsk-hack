import {ToggleButtonGroup} from "react-bootstrap";
import gen from "../../../assets/gen.svg";

export default function GenMod4({}) {
    return <div>

        {/*из файла -4- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 2 из 3</small>
        </div>

        <h3 className="mt-4">Сколько слайдов хочешь получить?</h3>

        <ToggleButtonGroup className="gap-2 mt-2 mb-2" type="radio" name="options" defaultValue={2}>
            <button className="align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"
                    id="tbg-radio-1" value={1}>
                <div className="text-start">
                    <h3 className="fc-fio">3-5</h3>
                </div>
            </button>
            <button className="align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"
                    id="tbg-radio-2" value={2}>
                <div className="text-start">
                    <h3 className="fc-fio">6-10</h3>
                </div>
            </button>
            <button className="align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"
                    id="tbg-radio-3" value={3}>
                <div className="text-start">
                    <h3 className="fc-fio">11-15</h3>
                </div>
            </button>
            <button className="align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"
                    id="tbg-radio-3" value={3}>
                <div className="text-start">
                    <h3 className="fc-fio">&lsaquo;15</h3>
                </div>
            </button>
        </ToggleButtonGroup>

        <small className="fc-grey-50 d-block my-3">или введи точное количество</small>


        <div className="input-group mb-3">
            <input type="text" className="form-control text-field shadow-none no-border" placeholder="10"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">слайдов</span>
        </div>

        <button className="align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center mx-auto mt-4 mb-2"
                // onClick={props.nextPage}
        >
            <div className="icon-box bg-white">
                <img src={gen} alt=""/>
            </div>
            <div className="text-start ms-2">
                <h3 className="fc-white">Начать генерацию</h3>
            </div>
        </button>
    </div>

}