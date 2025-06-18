import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

interface Slide {
    image: string;
    title?: string;
    subtitle?: string;
}

interface NewsGalleryProps {
    slides: Slide[];
}

export const NewsGallery = ({ slides }: NewsGalleryProps) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState(0);
    const [current, setCurrent] = useState(1);

    /* плавная анимация ширины прогресс-бара */
    useEffect(() => {
        let id: number;
        const loop = () => {
            if (progressRef.current)
                progressRef.current.style.width = `${progress * 100}%`;
            id = requestAnimationFrame(loop);
        };
        id = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(id);
    }, [progress]);

    /* коллбеки стрелок */
    const slidePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
    const slideNext = useCallback(() => swiperRef.current?.slideNext(), []);

    return (
        <div className="relative mb-16 w-full max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl group">
            <Swiper
                modules={[Autoplay, EffectFade]}
                onSwiper={(s) => (swiperRef.current = s)}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={900}
                slidesPerView={1}
                onAutoplayTimeLeft={(_, __, p) => setProgress(1 - p)}
                onSlideChange={(s) => setCurrent(s.realIndex + 1)}
                className="w-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
                            <motion.img
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={slide.image}
                                alt={slide.title ?? `Фото ${i + 1}`}
                                className="w-full h-full object-cover rounded-3xl"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />

                            {(slide.title || slide.subtitle) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-5 py-4 rounded-xl text-white shadow-lg max-w-[90%] sm:max-w-[70%]"
                                >
                                    {slide.title && (
                                        <h3 className="text-xl font-bold leading-tight">
                                            {slide.title}
                                        </h3>
                                    )}
                                    {slide.subtitle && (
                                        <p className="text-sm text-white/90 mt-1">
                                            {slide.subtitle}
                                        </p>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* счётчик */}
            <div className="absolute top-4 right-6 z-20 text-sm text-white">
                {current} / {slides.length}
            </div>

            {/* прогресс-бар */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs h-1 bg-white/20 rounded-full overflow-hidden z-20">
                <div
                    ref={progressRef}
                    className="h-full bg-white transition-[width] duration-[50ms] ease-linear"
                />
            </div>

            {/* стрелки */}
            <button
                onClick={slidePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30
                   flex items-center justify-center w-10 h-10 text-white bg-black/40
                   hover:bg-black/70 backdrop-blur-md rounded-full shadow-lg
                   transition duration-300"
                aria-label="Назад"
            >
                <HiChevronLeft className="text-2xl" />
            </button>
            <button
                onClick={slideNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30
                   flex items-center justify-center w-10 h-10 text-white bg-black/40
                   hover:bg-black/70 backdrop-blur-md rounded-full shadow-lg
                   transition duration-300"
                aria-label="Вперёд"
            >
                <HiChevronRight className="text-2xl" />
            </button>
        </div>
    );
};
