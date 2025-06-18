import type { menuItemType } from "../types/menuItemType";

export const mockMenu: menuItemType[] = [
    {
        title: "Главная",
        href: "/home",
        children: [
            { title: "Материальная база", href: "/home/base" },
            { title: "История кафедры", href: "/home/department-history" },
            { title: "О кафедре", href: "/home/about" },
            { title: "Сайт института", href: "https://iite.vlsu.ru" },
            { title: "Сайт ВлГУ", href: "https://www.vlsu.ru/" },
        ],
    },
    {
        title: "Новости",
        href: "/news",
    },
    {
        title: "Абитуриентам",
        href: "/applicants",
        children: [
            { title: "Приёмная комиссия", href: "https://prkom.vlsu.ru/" },
            { title: "Как поступить?", href: "/applicants/how-to-apply" },
            { title: "Буклет", href: "/applicants/booklet" },
        ],
    },
    {
        title: "Объявления",
        href: "/announcements",
    },
    {
        title: "Образование",
        href: "/education/program/bachelor",
        children: [
            // { title: "Направления подготовки", href: "/education/programs" },
            { title: "Бакалавриат", href: "/education/program/bachelor" },
            { title: "Магистратура", href: "/education/program/master" },
        ],
    },
    {
        title: "Сотрудники",
        href: "/staff/teachers",
        children: [
            { title: "Преподаватели кафедры", href: "/staff/teachers" },
            { title: "Преподаватели-работодатели", href: "/staff/employers" },
            { title: "Руководство", href: "/staff/administration" },
        ],
    },
    {
        title: "Наука",
        href: "/science",
        children: [
            {
                title: "Научные издания и публикации",
                href: "/science/publications",
            },
            {
                title: "Начуно-технические мероприятия",
                href: "/science/events",
            },
            { title: "ЦМПО", href: "/science/cmpo" },
            { title: "НОЦ", href: "/science/noc" },
            { title: "МЭС", href: "/science/mes" },
            { title: "Лаборатория Intel", href: "/science/intel-lab" },
            {
                title: "Дизайн центр микроэлектроники",
                href: "/science/design-center",
            },
            { title: "Научные направления", href: "/science/directions" },
        ],
    },
    {
        title: "Контакты",
        href: "/contacts",
    },
];
