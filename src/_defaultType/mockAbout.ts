import type { PageData } from "./pageType";

import img from "../assets/slide1.jpg";

export const aboutPage: PageData = {
    slug: "about",
    title: "О кафедре ВТиСУ",
    subtitle: "Цифры, факты и возможности кафедры",
    content: [
        {
            type: "hero",
            image: img, // можешь заменить на свой путь
            title: "Кафедра вычислительных технологий и систем управления",
            subtitle:
                "Мы объединяем фундаментальное образование, науку и индустрию, чтобы формировать лидеров цифровой трансформации.",
        },
        {
            type: "text",
            rich: [
                {
                    type: "text",
                    text: "Кафедра «Вычислительной техники и систем управления» — выпускающая кафедра, ведущая подготовку специалистов в области информационных технологий по очной и заочной формам обучения.",
                },
            ],
        },
        {
            type: "counters",
            items: [
                { to: 650, label: "Обучающихся студентов" },
                { to: 60, label: "Профессоров и преподавателей" },
                { to: 12, label: "Научных лабораторий" },
                { to: 20, label: "Грантов в год" },
            ],
        },
        {
            type: "button",
            text: "Все образовательные программы",
            href: "/programs",
        },
        {
            type: "image",
            src: "https://basegroup.ru/sites/default/files/1_korp.jpg",
            alt: "Главный корпус",
            caption: "Главный корпус университета",
        },
        {
            type: "list",
            ordered: false,
            items: [
                [{ type: "link", text: "Контакты", href: "/contacts" }],
                [
                    {
                        type: "link",
                        text: "Руководство",
                        href: "/staff/leadership",
                    },
                ],
                [
                    {
                        type: "link",
                        text: "Преподаватели",
                        href: "/staff/teachers",
                    },
                ],
                [{ type: "link", text: "История кафедры", href: "/history" }],
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Направления подготовки",
        },
        {
            type: "slider",
            slides: [
                {
                    image: "https://urban.hse.ru/pubs/share/direct/266447702.jpg",
                    title: "Студенты на занятиях",
                    subtitle: "Учебный процесс",
                    link: "/programs/1",
                },
                {
                    image: "https://lh5.googleusercontent.com/proxy/ono1yws2zHzpCe3kqouUb_ws5KENXXAEq4s80TatmYQwY2dFg_xtf2b3uhqODrzf6Wa_NYDeiouSog",
                    title: "Лекция в аудитории",
                    subtitle: "Современные дисциплины",
                    link: "/programs/2",
                },
            ],
        },
        {
            type: "text",
            rich: [
                {
                    type: "text",
                    text: "После окончания бакалавриата студенты могут продолжить обучение в магистратуре и аспирантуре.",
                },
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Научная деятельность",
        },
        {
            type: "text",
            rich: [
                {
                    type: "text",
                    text: "Студенты и преподаватели кафедры принимают участие в конференциях, конкурсах и научных проектах, публикуются в ведущих изданиях.",
                },
            ],
        },
        {
            type: "button",
            text: "Узнать больше о начной деятельности",
            href: "/programs",
        },
        {
            type: "heading",
            level: 2,
            text: "Материально-техническая база",
        },
        {
            type: "text",
            rich: [
                {
                    type: "text",
                    text: "Кафедра располагает современной лабораторной базой, компьютерными классами с доступом в Интернет, мультимедийными аудиториями и специализированным ПО.",
                },
            ],
        },
        {
            type: "slider",
            slides: [
                {
                    image: "https://ce.vlsu.ru/images/offices/401-2-600.jpg",
                    title: "Лаборатория",
                    subtitle: "Оборудование лаборатории микропроцессоров",
                    link: "/equipment",
                },
                {
                    image: "https://ce.vlsu.ru/images/offices/401-2_2-600.jpg",
                    title: "Компьютерный класс",
                    subtitle: "Компьютерный класс кафедры",
                    link: "/equipment",
                },
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Международное сотрудничество",
        },
        {
            type: "text",
            rich: [
                {
                    type: "text",
                    text: "Кафедра активно взаимодействует с вузами России и зарубежья. Студенты могут проходить стажировки в университетах Европы и Азии.",
                },
            ],
        },
        {
            type: "image",
            src: "https://zebra-tv.ru/upload/medialibrary/a47/8nzxato12j3c2ehgp6pt2pqhs8wtxn4t/foto01.JPG",
            alt: "Международное сотрудничество",
            caption: "Стажировки и международные проекты",
        },
    ],
};
