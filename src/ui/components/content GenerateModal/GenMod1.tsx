import reg from "../../../assets/rectangle.svg";
import gen from "../../../assets/gen.svg";

export interface GenModProps {
    nextPage: () => void;
}

export default function GenMod1(props: GenModProps) {
    return <div>

        {/*из файла -1- */}
        <div className="row">
            <h2>Как работает?</h2>
            <small className="fc-grey-50">Генерация из файла</small>
        </div>

        <img className="pt-3" src={reg}/>
        <button className="align-items-center hstack m-0 p-3 bg-fio br-36 align-items-center mx-auto mt-4 mb-2" onClick={props.nextPage}>
            <div className="icon-box bg-white">
                <img src={gen} alt=""/>
            </div>
            <div className="text-start ms-2">
                <h3 className="fc-white">Начать генерацию</h3>
            </div>
        </button>
    </div>

}