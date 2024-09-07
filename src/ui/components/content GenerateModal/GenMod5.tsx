import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect, useState} from "react";

interface GenModProps {
    nextPage: () => void;
    isCurrentPage: boolean
}

export default function GenMod5(props: GenModProps) {
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

        {/*из файла -3- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 2 из 3</small>
        </div>

        <div className="container mt-5" style={{width: 200, height: 200}} onClick={props.nextPage}>
            <CircularProgressbar text={`${percentage}%`} value={percentage} maxValue={100} strokeWidth={2}
                 styles={{
                     root: {},
                     path: {
                         stroke: '#5269FF',
                         strokeLinecap: 'round',
                     },
                     trail: {
                         stroke: 'rgba(0,0,0,0.1)',
                     },
                     text: {
                         fill: 'rgba(0,0,0,0.1)',
                         fontSize: '22px',
                     },
                 }}
            />
        </div>

        <p className="fc-grey-20 my-1">Заклыдываем фундамент, строим каркас</p>

    </div>
}