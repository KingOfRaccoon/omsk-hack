import gen from "../../../assets/gen.svg";
import {useEffect, useState} from "react";
import {ToggleButtonGroup} from "react-bootstrap";

interface GenModProps {
    nextPage: () => void,
    isCurrentPage: boolean,
    prevPage?: () => void
}

export default function GenMod6(props: GenModProps) {
    const [percentage, setPercentage] = useState(0);
    const [selectedButton, setSelectedButton] = useState(1);
    const handleToggle = (value: number) => {
        console.log(value);
        setSelectedButton(value);
    }

    useEffect(() => {
        if (props.isCurrentPage) {
            if (percentage >= 100) {
                setTimeout(() => {
                    props.nextPage()
                }, 1000);
            } else {
                setTimeout(() => {
                    const newValue = percentage + Math.floor(Math.random() * 14) + 1
                    setPercentage(newValue > 100 ? 100 : newValue)
                }, 300)
            }
        }
    }, [percentage, props.isCurrentPage]);
    return <div>
        {/*из файла -4- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 3 из 3</small>
        </div>

        <h3 className="mt-4">Выбери оформление</h3>

        <ToggleButtonGroup className="gap-2 mt-3 mb-2" type="radio" name="options" defaultValue={2}>
            <button
                className={selectedButton == 1 ? "align-items-center hstack m-0 p-3 br-36 align-items-center mx-auto bg-fio" : "align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"}
                id="tbg-radio-1" value={1} onClick={() => handleToggle(1)}>
                <div className="text-start">
                    <h3 className={selectedButton == 1 ? "fc-white" : "fc-fio"}>3-5</h3>
                </div>
            </button>
            <button
                className={selectedButton == 2 ? "align-items-center hstack m-0 p-3 br-36 align-items-center mx-auto bg-fio" : "align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"}
                id="tbg-radio-2" value={2} onClick={() => handleToggle(2)}>
                <div className="text-start">
                    <h3 className={selectedButton == 2 ? "fc-white" : "fc-fio"}>6-10</h3>
                </div>
            </button>
            <button
                className={selectedButton == 3 ? "align-items-center hstack m-0 p-3 br-36 align-items-center mx-auto bg-fio" : "align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"}
                id="tbg-radio-4" value={3} onClick={() => handleToggle(3)}>
                <div className="text-start">
                    <h3 className={selectedButton == 3 ? "fc-white" : "fc-fio"}>11-15</h3>
                </div>
            </button>
            <button
                className={selectedButton == 4 ? "align-items-center hstack m-0 p-3 br-36 align-items-center mx-auto bg-fio" : "align-items-center hstack m-0 p-3 bg-grey-3 br-36 align-items-center mx-auto"}
                id="tbg-radio-4" value={3} onClick={() => handleToggle(4)}>
                <div className="text-start">
                    <h3 className={selectedButton == 4 ? "fc-white" : "fc-fio"}>&rsaquo;15</h3>
                </div>
            </button>
        </ToggleButtonGroup>

        <div className="row justify-content-between mt-4">
            <button className=" col-auto align-items-center hstack m-0 p-3 bg-f br-36 align-items-center">
                <div className="text-start">
                    <h3 className="fc-fio"  onClick={props.prevPage}>Назад</h3>
                </div>
            </button>
            <button className="col-auto align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center"
                    onClick={props.nextPage}>
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