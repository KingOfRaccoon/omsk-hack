import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect} from "react";

export interface GenModProps {
    nextPage: () => void;
}

export default function GenMod3(props: GenModProps) {

    const percentage = 66;

    useEffect(() => {
        // if(percentage == 100)
        //     props.nextPage

    }, [percentage]);
    return <div>

        {/*из файла -3- */}
        <div className="row">
            <h2>Генерация презентации</h2>
            <small className="fc-grey-50">шаг 1 из 3</small>
        </div>

        <div className="container mt-5" style={{width: 200, height: 200}} onClick={props.nextPage}>
            <CircularProgressbar text={"66%"} value={66} strokeWidth={2}
                 styles={{
                     root: {},
                     path: {
                         stroke: '#5269FF',
                         strokeLinecap: 'round',
                         transition: 'stroke-dashoffset 0.5s ease 0s',
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

        <p className="fc-grey-20 my-1">Осталось немного :)</p>

    </div>
}