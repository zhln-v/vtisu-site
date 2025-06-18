export type PageData = {
    slug: string;
    title: string;
    subtitle?: string;
    content: Block[];
};

// 👇 Описание блоков
export type HeadingBlock = {
    type: "heading";
    level: number;
    text: string;
};

export type TextBlock = {
    type: "text";
    rich: InlineElement[];
};

export type ImageBlock = {
    type: "image";
    src: string;
    alt?: string;
    caption?: string;
    float?: "left" | "right";
};

export type SliderBlock = {
    type: "slider";
    slides: SlideData[];
};

export type SlideData = {
    title: string;
    subtitle: string;
    image: string;
    link: string;
};

export type ListBlock = {
    type: "list";
    items: InlineElement[][];
    ordered?: boolean;
};

export type ButtonBlock = {
    type: "button";
    text: string;
    href: string;
};

export type InfoBlock = {
    type: "info";
    title: string;
    description: InlineElement[];
    image: {
        src: string;
        alt?: string;
    };
    button?: {
        text: string;
        href: string;
    };
    imagePosition?: "left" | "right";
};

// ✅ Новый блок: Счётчики
export type CountersBlock = {
    type: "counters";
    items: {
        to: number;
        label: string;
    }[];
    bgColor?: string; // Tailwind класс для фона
};

// 🤘 Добавь любые дополнительные блоки сюда
// export type ProgramBlock = { ... }

export type InlineElement =
    | { type: "text"; text: string }
    | { type: "bold"; content: InlineElement[] }
    | { type: "italic"; content: InlineElement[] }
    | { type: "link"; text: string; href: string }
    | { type: "image"; src: string; alt?: string };

// 👇 Главный тип для переключения блоков
export type HeroBlock = {
    type: "hero";
    image: string;
    title: string;
    subtitle?: string;
};

export type Block =
    | HeadingBlock
    | TextBlock
    | ImageBlock
    | SliderBlock
    | ListBlock
    | ButtonBlock
    | InfoBlock
    | CountersBlock
    | HeroBlock;
