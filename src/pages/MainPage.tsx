import { AboutBlock } from "../components/AboutBlock/AboutBlock";
import {
    MainSlider,
    type SlideData,
} from "../components/MainSlider/MainSlider";
import { NewsPreviewBlock } from "../components/NewsBlock/NewsBlock";
import { ProgramsBlock } from "../components/ProgramBlock/ProgramBlock";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const slides: SlideData[] = [
    {
        title: "Добро пожаловать в ВТиСУ",
        subtitle: "Будущее начинается здесь",
        image: slide1,
        link: "/home/about",
    },
    {
        title: "Исследования и технологии",
        subtitle: "Мы меняем мир цифровых систем",
        image: slide2,
        link: "#research",
    },
    {
        title: "Преподаватели и студенты",
        subtitle: "Команда, двигающая науку вперёд",
        image: slide3,
        link: "#team",
    },
];

export const MainPage = () => {
    return (
        <>
            <MainSlider slides={slides} />
            <AboutBlock />
            {/* <NewsPreviewBlock /> */}
            <ProgramsBlock />
        </>
    );
};
