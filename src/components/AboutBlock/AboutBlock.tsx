import { useEffect, useState } from "react";
import about1 from "../../assets/about.jpg";
import about2 from "../../assets/about.jpg";
import about3 from "../../assets/about.jpg";

import { AboutText } from "./AboutText";
import { AboutSlider } from "./AboutSlider";
import { DecorativeBlobs } from "./AboutDecorativeBlobs";

const images = [about1, about2, about3];

export const AboutBlock = () => {
    const [current, setCurrent] = useState(0);
    const image = images[current];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-sky-50 via-white to-gray-100 overflow-hidden">
            <DecorativeBlobs />
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-14">
                <AboutText />
                <AboutSlider image={image} />
            </div>
        </section>
    );
};
