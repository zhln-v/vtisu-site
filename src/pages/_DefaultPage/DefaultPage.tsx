import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { findPageBySlug } from "../../mock/mockPages";
import { NotFoundPage } from "../NotFoundPage";

import {
    HeadingBlock,
    TextBlock,
    ImageBlock,
    SliderBlock,
    ListBlock,
    ButtonBlock,
    InfoBlock,
    CountersBlock,
} from "./blocks";

import type { Block } from "../../_defaultType/pageType";
import { HeroSection } from "./blocks/HeroSection";

export const DefaultPage = () => {
    const { "*": slug = "" } = useParams();
    const page = findPageBySlug(slug);

    if (!page) return <NotFoundPage />;

    const { title, content } = page;

    return (
        <section className="py-24 bg-white text-gray-900 min-h-[calc(100vh-64px)]">
            <div className=" mx-auto space-y-20">
                <Header title={title} />
                <article className="space-y-16">
                    {content.map((block, index) => (
                        <React.Fragment key={index}>
                            {renderBlock(block)}
                        </React.Fragment>
                    ))}
                </article>
            </div>
        </section>
    );
};

const Header = ({ title }: { title: string }) => (
    <header className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold drop-shadow-sm"
        >
            {title}
        </motion.h1>
    </header>
);

const renderBlock = (block: Block): React.ReactNode => {
    switch (block.type) {
        case "heading":
            return <HeadingBlock {...block} />;
        case "text":
            return <TextBlock {...block} />;
        case "image":
            return <ImageBlock {...block} />;
        case "slider":
            return <SliderBlock slides={block.slides} height="h-[600px]" />;
        case "list":
            return <ListBlock {...block} />;
        case "button":
            return <ButtonBlock {...block} />;
        case "info":
            return <InfoBlock {...block} />;
        case "counters":
            return (
                <CountersBlock items={block.items} bgColor={block.bgColor} />
            );
        case "hero":
            return (
                <HeroSection
                    image={block.image}
                    title={block.title}
                    subtitle={block.subtitle}
                />
            );
        // case "program":
        //   return <ProgramBlock {...block} />;
        default:
            return null;
    }
};
