import {useRef} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import GenMod1 from "../components/content GenerateModal/GenMod1.tsx";
import GenMod2 from "../components/content GenerateModal/GenMod2.tsx";
import GenMod3 from "../components/content GenerateModal/GenMod3.tsx";

export function GenerateModalController(){
    const swipeRef = useRef<SwiperRef>(null);

    function nextPage(){
        if (swipeRef.current)
            swipeRef.current.swiper.slideNext();
    }

    return <Swiper ref={swipeRef} noSwiping={false} noSwipingClass={'swiper-slide'} allowTouchMove={false} >
        <SwiperSlide>
            <GenMod1 nextPage={nextPage}/>
        </SwiperSlide>
        <SwiperSlide>
            <GenMod2 nextPage={nextPage}/>
        </SwiperSlide>
        <SwiperSlide>
            <GenMod3 nextPage={nextPage}/>
        </SwiperSlide>
    </Swiper>
}