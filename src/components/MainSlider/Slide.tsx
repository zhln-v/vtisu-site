import { SlideImage } from "./SlideImage";
import { SlideContent } from "./SlideContent";
import { SlideProgressBar } from "./ProgressBar";

interface SlideProps {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    index: number;
    activeSlideIndex: number;
    height?: string; // <--- добавляем сюда
}

export const Slide = ({
    title,
    subtitle,
    image,
    link,
    index,
    activeSlideIndex,
    height = "h-screen",
}: SlideProps) => (
    <div className={`relative w-full ${height}`}>
        <SlideImage src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Централизуем SlideContent */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
            <SlideContent title={title} subtitle={subtitle} link={link} />
        </div>

        {activeSlideIndex === index && (
            <SlideProgressBar activeSlideIndex={activeSlideIndex} />
        )}
    </div>
);
