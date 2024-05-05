import { useEffect, useState } from "react";

const useHeaderHook = () => {
    const [active, setActive] = useState(false);

    const listenScrollEvent = () => {
        const poster = document.getElementById("poster");

        if (!poster) return null;
        const to = poster.offsetHeight;

        if (window.scrollY < to) {
            return setActive(false);
        } else if (window.scrollY > to) {
            return setActive(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return { active };
};

export default useHeaderHook;
