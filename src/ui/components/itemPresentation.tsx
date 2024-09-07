import imgTest from "../../assets/imgTest.png";
import start from "../../assets/start.svg";

export default function ItemPresentation() {
    return <div>
        <div className="presentation-box bg-fio">
            <img src={imgTest} alt=""/>
            <p className="fc-white ms-3 mt-3 fw-medium">Пленарное заседание</p>
            <div className="preview-box justify-content-center align-items-center">
                <img className="my-auto mx-auto " src={start} alt="" width={30} height={28}/>
            </div>
        </div>
    </div>

}