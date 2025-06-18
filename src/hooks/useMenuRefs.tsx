import { useRef } from "react";

export const useMenuRefs = <T = HTMLLIElement,>() => {
    const refs = useRef<(T | null)[]>([]);
    const setRef = (index: number) => (el: T | null) => {
        refs.current[index] = el;
    };
    return { refs, setRef };
};
