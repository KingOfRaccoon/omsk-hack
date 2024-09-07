import {useRef, useState} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import GenMod1 from "../components/content GenerateModal/GenMod1.tsx";
import GenMod2 from "../components/content GenerateModal/GenMod2.tsx";
import GenMod3 from "../components/content GenerateModal/GenMod3.tsx";
import GenMod4 from "../components/content GenerateModal/GenMod4.tsx";

export function GenerateModalController() {
    const [index, setIndex] = useState(0);
    const swipeRef = useRef<SwiperRef>(null);

    function nextPage() {
        if (swipeRef.current)
            swipeRef.current.swiper.slideNext();
    }

    return <Swiper
        ref={swipeRef}
        noSwiping={false}
        noSwipingClass={'swiper-slide'}
        allowTouchMove={false}
        onActiveIndexChange={it => {setIndex(it.activeIndex); console.log(it.activeIndex)}}>
        <SwiperSlide>
            <GenMod1 nextPage={nextPage}/>
        </SwiperSlide>
        <SwiperSlide>
            <GenMod2 nextPage={nextPage}/>
        </SwiperSlide>
        <SwiperSlide>
            <GenMod3 isCurrentPage={index == 2} nextPage={nextPage}/>
        </SwiperSlide>
        <SwiperSlide>
            <GenMod4/>
        </SwiperSlide>
    </Swiper>
}