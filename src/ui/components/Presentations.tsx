import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import {useCallback, useRef} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";

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
            <a><small className="fc-blue ms-3">Все</small></a>
            <button className="icon-box ms-auto" onClick={handlePrev}>
                <img src={left} alt=""/>
            </button>
            <button className="icon-box ms-3" onClick={handleNext}>
                <img src={right} alt=""/>
            </button>
        </div>

        {/*<div>*/}
        <Swiper ref={sliderRef} slidesPerView={4}>
            {/*<div className="swiper-wrapper">*/}
            {items.map((index) => {return (<SwiperSlide>Slide {index + 1}</SwiperSlide>);})}
            {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*</div>*/}
            {/*<div className="swiper-pagination"></div>*/}

            {/*<div className="swiper-button-prev"></div>*/}
            {/*<div className="swiper-button-next"></div>*/}

            {/*<div className="swiper-scrollbar"></div>*/}
        </Swiper>
        {/*</div>*/
        }
    </div>
}