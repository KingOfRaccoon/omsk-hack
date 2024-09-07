import gen from "../../../assets/gen.svg";
import image1 from "../../../assets/image_onb1.svg";
import image2 from "../../../assets/image_onb2.svg";
import image3 from "../../../assets/image_onb3.svg";
import image4 from "../../../assets/image_onb4.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper/modules";
import 'swiper/swiper-bundle.css';

export interface GenModProps {
    nextPage: () => void;
}

export default function GenMod1(props: GenModProps) {
    const images = [image1, image2, image3, image4];

    return <div>
        <div className="row">
            <h2>Как работает?</h2>
            <small className="fc-grey-50">Генерация из файла</small>
        </div>

        <Swiper slidesPerView={1}
                modules={[EffectFade, Pagination, Navigation]}
                navigation={true}
                pagination={{type: "bullets", }} aria-orientation={"horizontal"}>
            {images.map((image) => (
                <SwiperSlide><img className="pt-3" src={image}/></SwiperSlide>
            ))}
        </Swiper>

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