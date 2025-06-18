import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Slide } from "./Slide";

export interface SlideData {
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

interface MainSliderProps {
    slides: SlideData[];
    height?: string;
}

export const MainSlider: React.FC<MainSliderProps> = ({
    slides,
    height = "h-screen", // значение по умолчанию
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`relative w-full overflow-hidden ${height}`}>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 8000 }}
                navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
                loop
                speed={800}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <Slide
                            {...slide}
                            height={height}
                            index={i}
                            activeSlideIndex={activeIndex}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="swiper-prev absolute left-6 bottom-6 z-10 text-white text-4xl font-light transition-transform duration-300 hover:-translate-x-1"
                aria-label="Предыдущий слайд"
            >
                ←
            </button>

            <button
                className="swiper-next absolute right-6 bottom-6 z-10 text-white text-4xl font-light transition-transform duration-300 hover:translate-x-1"
                aria-label="Следующий слайд"
            >
                →
            </button>
        </div>
    );
};
