import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "../components/UI/Button/Button";

export const ContactPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-gray-100 py-24 px-4 text-black">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold mb-4"
                >
                    Контакты кафедры
                </motion.h1>
                <p className="text-gray-700 mt-2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Мы открыты для общения, сотрудничества и новых идей.
                    Напишите нам или приходите лично — всегда рады видеть вас!
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
                {/* Контактная информация */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8 rounded-2xl bg-white p-8 border border-gray-200"
                >
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold">Адрес</h4>
                            <p className="text-gray-700 leading-relaxed">
                                600000, г. Владимир, проспект Строителей, д. 3/7
                                <br />
                                Владимирский государственный университет, 3-й
                                корпус
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold">Телефон</h4>
                            <p className="text-gray-700">+7 (4922) 47-99-00</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-blue-600 text-xl mt-1" />
                        <div>
                            <h4 className="text-lg font-semibold">Email</h4>
                            <p className="text-gray-700">info@vlsu.ru</p>
                        </div>
                    </div>

                    <Button variant="dark" asLink to="mailto:info@vlsu.ru">
                        Написать нам
                    </Button>
                </motion.div>

                {/* Карта */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full h-96 rounded-2xl overflow-hidden border border-gray-200"
                >
                    <iframe
                        title="Карта ВлГУ, корпус 3"
                        src="https://yandex.ru/map-widget/v1/?ll=40.3714%2C56.1457&z=17&pt=40.3714,56.1457,pm2rdl"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};
