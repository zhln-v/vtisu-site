import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
} from "react-icons/fa";
import { Logo } from "../Header/Logo";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export const Footer = () => {
    const menuItems = useSelector((state: RootState) => state.menu.items);

    return (
        <footer className="bg-silver">
            <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {/* Логотип и описание */}
                <div>
                    <Logo />
                    <p className="mt-4 text-sm text-gray-600 max-w-xs leading-relaxed">
                        Кафедра вычислительных технологий и систем управления —
                        сердце цифрового будущего ВлГУ. Мы обучаем, исследуем и
                        создаём инновации.
                    </p>
                </div>

                {/* Меню */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Быстрые ссылки
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {menuItems.slice(0, 5).map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Контакты */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Контакты
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                        <p>ВлГУ, корпус №3</p>
                        <p>ул. Горького, 87</p>
                        <p>Владимир, Россия, 600000</p>
                        <p>
                            Тел:{" "}
                            <a
                                href="tel:+79001234567"
                                className="text-blue-600 hover:underline"
                            >
                                +7 (900) 123-45-67
                            </a>
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:kafedra@vlsu.ru"
                                className="text-blue-600 hover:underline"
                            >
                                kafedra@vlsu.ru
                            </a>
                        </p>
                    </div>
                </div>

                {/* Соцсети */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Следите за нами
                    </h3>
                    <div className="flex gap-4 text-blue-600 text-xl">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF className="hover:text-blue-800" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="hover:text-blue-500" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="hover:text-pink-600" />
                        </a>
                        <a href="#" aria-label="Telegram">
                            <FaTelegramPlane className="hover:text-blue-500" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Низ */}
            <div className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Кафедра ВТиСУ ВлГУ. Все права
                защищены.
            </div>
        </footer>
    );
};
