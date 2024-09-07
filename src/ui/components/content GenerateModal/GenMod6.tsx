import gen from "../../../assets/gen.svg";
import temp1 from "../../../assets/temp1.png";
import temp2 from "../../../assets/temp2.png";
import temp3 from "../../../assets/temp3.png";
import temp4 from "../../../assets/temp4.png";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {ToggleButtonGroup} from "react-bootstrap";

interface GenModProps {
    nextPage: () => void,
    isCurrentPage: boolean,
    prevPage?: () => void
}

export default function GenMod6(props: GenModProps) {
    const [percentage, setPercentage] = useState(0);
    const navigate = useNavigate();

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
    return <div id="fix-parent-block">
        {/*из файла -4- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 3 из 3</small>
        </div>

        <h3 className="mt-4">Выбери оформление</h3>

        <ToggleButtonGroup id="templates" className="gap-2 mt-3 mb-2 horizontal-scrollable" type="radio" name="options" defaultValue={2}>
            <button
                className={selectedButton == 1 ? "vstack m-0 p-1 br-12 bg-fio" : "vstack m-0 p-1 br-12 bg-grey-3"}
                id="tbg-radio-1" value={1} onClick={() => handleToggle(1)}>
                    <img src={temp1} alt=""/>
                    <h4 className={selectedButton == 1 ? "fc-white fc-fio mx-auto my-1" : "fc-fio fc-fio mx-auto my-1"}>Департамент №1</h4>
            </button>
            <button
                className={selectedButton == 2 ? "vstack m-0 p-1 br-12 bg-fio" : "vstack m-0 p-1 br-12 bg-grey-3"}
                id="tbg-radio-2" value={2} onClick={() => handleToggle(2)}>
                    <img src={temp2} alt=""/>
                    <h4 className={selectedButton == 2 ? "fc-white fc-fio mx-auto my-1" : "fc-fio fc-fio mx-auto my-1"}>Департамент №2</h4>
            </button>
            <button
                className={selectedButton == 3 ? "vstack m-0 p-1 br-12 bg-fio" : "vstack m-0 p-1 br-12 bg-grey-3"}
                id="tbg-radio-4" value={3} onClick={() => handleToggle(3)}>
                    <img src={temp3} alt=""/>
                    <h4 className={selectedButton == 3 ? "fc-white fc-fio mx-auto my-1" : "fc-fio fc-fio mx-auto my-1"}>Яркая</h4>
            </button>
            <button
                className={selectedButton == 4 ? "vstack m-0 p-1 br-12 bg-fio" : "vstack m-0 p-1 br-12 bg-grey-3"}
                id="tbg-radio-4" value={3} onClick={() => handleToggle(4)}>
                    <img src={temp4} alt=""/>
                    <h4 className={selectedButton == 4 ? "fc-white fc-fio mx-auto my-1" : "fc-fiofc-fio mx-auto my-1"}>Круглая</h4>
            </button>
        </ToggleButtonGroup>

        <div className="container">
            <div className="row justify-content-between mt-4">
                <button className=" col-auto align-items-center hstack m-0 p-3 bg-f br-36 align-items-center">
                    <div className="text-start">
                        <h3 className="fc-fio" onClick={props.prevPage}>Назад</h3>
                    </div>
                </button>
                <button className="col-auto align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center"
                        onClick={() => {navigate("/redactor")}}>
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
    </div>

}