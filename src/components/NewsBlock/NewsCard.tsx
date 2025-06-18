import classNames from "classnames";
import type { NewsItemType } from "../../types/newsItemType";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";

interface Props {
    item: NewsItemType;
    variant?: "full" | "compact" | "minimal";
    className?: string;
}

export const NewsCard = ({
    item,
    variant = "compact",
    className = "",
}: Props) => {
    const { title, subheader, slug, images } = item;
    const image = images?.[0]?.url || null;
    const excerpt = subheader;
    const normalizedSlug = slug.replace(/^\/+/, "");

    const isFull = variant === "full";
    const isMinimal = variant === "minimal";

    const imageHeightClass = isFull ? "h-80 md:h-[420px]" : "h-64 md:h-72";

    return (
        <div
            className={classNames(
                "rounded-xl bg-white transition-shadow duration-200",
                className
            )}
        >
            {!isMinimal && (
                <div>
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className={classNames(
                                "w-full object-cover rounded-t-xl",
                                imageHeightClass
                            )}
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <div
                            className={classNames(
                                "w-full flex items-center justify-center bg-gray-100 text-gray-400 text-xl font-semibold uppercase rounded-t-xl",
                                imageHeightClass
                            )}
                        >
                            Без изображения
                        </div>
                    )}

                    <div className="p-4 flex flex-col h-full justify-between">
                        <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-800 mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                {excerpt}
                            </p>
                        </div>

                        <AnimatedLinkButton
                            to={`${normalizedSlug}`}
                            label="Читать"
                            icon={<FiArrowRight />}
                            variant="outline"
                            className="w-full mt-auto"
                        />
                    </div>
                </div>
            )}

            {isMinimal && (
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-2">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {excerpt}
                        </p>
                    </div>

                    <div className="mt-6">
                        <AnimatedLinkButton
                            to={`news/${normalizedSlug}`}
                            label="Читать"
                            icon={<FiArrowRight />}
                            variant="outline"
                            className="w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
