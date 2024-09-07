import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {A11y, Controller, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {useCallback, useRef} from "react";

export default function CustomSwiper() {
    const sliderRef = useRef<SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div>
            <button onClick={() => handlePrev()}>Prev</button>
            <button onClick={() => handleNext()}>Next</button>
            <Swiper ref={sliderRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={50}
                    noSwiping={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

            </Swiper>
        </div>
    );
};