import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import {useCallback, useRef} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import ItemPresentation from "./itemPresentation.tsx";

export function Presentations() {
    const sliderRef = useRef<SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        console.log("handlePrev")
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        console.log("handleNext")
        sliderRef.current.swiper.slideNext();
    }, []);

    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return <div className="container p-3 pe-2 bg-white br-36">
        <div className="container hstack">
            <h3>Мои презентации</h3>
            <a><small className="fc-fio ms-3">Все</small></a>
            <button className="icon-box ms-auto" onClick={handlePrev}>
                <img src={left} alt=""/>
            </button>
            <button className="icon-box ms-3" onClick={handleNext}>
                <img src={right} alt=""/>
            </button>
        </div>

        <Swiper className="mt-2" ref={sliderRef} slidesPerView={4}>
            {items.map((index) => {return (
                <SwiperSlide>
                    <ItemPresentation/>
                </SwiperSlide>);})}
        </Swiper>
        {}
    </div>
}