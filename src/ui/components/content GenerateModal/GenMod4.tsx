import {ToggleButtonGroup} from "react-bootstrap";
import gen from "../../../assets/gen.svg";
import {useEffect, useState} from "react";

interface GenModProps {
    nextPage: () => void;
    isCurrentPage: boolean
}

export default function GenMod4(props: GenModProps) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (props.isCurrentPage) {
            if (percentage >= 100) {
                setTimeout(() => {
                    props.nextPage()
                }, 1000);
            } else {
                setTimeout(() => {
                    const newValue = percentage + Math.floor(Math.random() * 14) + 1
                    setPercentage(newValue > 100 ? 100: newValue)
                }, 300)
            }
        }
    }, [percentage, props.isCurrentPage]);
    return <div>
        {/*из файла -4- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 2 из 3</small>
        </div>

        <h3 className="mt-4">Сколько слайдов хочешь получить?</h3>

        <ToggleButtonGroup className="gap-2 mt-3 mb-2" type="radio" name="options" defaultValue={2}>
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
                    <h3 className="fc-fio">&rsaquo;15</h3>
                </div>
            </button>
        </ToggleButtonGroup>

        <small className="fc-grey-50 d-block my-4">или введи точное количество</small>

        <div className="input-group mb-3 justify-content-center">
            <input type="text" className="form-control text-field shadow-none no-border" placeholder="10"
                   aria-label="Number of slides" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">слайдов</span>
        </div>

        <div className="row justify-content-between mt-4">
            <button className=" col-auto align-items-center hstack m-0 p-3 bg-f br-36 align-items-center">
                <div className="text-start">
                    <h3 className="fc-fio">Назад</h3>
                </div>
            </button>
            <button className="col-auto align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center"
                onClick={props.nextPage}
            >
                <div className="icon-box bg-white">
                    <img src={gen} alt=""/>
                </div>
                <div className="text-start ms-2">
                    <h3 className="fc-white">Начать генерацию</h3>
                </div>
            </button>
            <div className="col-1"></div>
        </div>

    </div>

}