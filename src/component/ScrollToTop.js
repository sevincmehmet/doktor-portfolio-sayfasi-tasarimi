import { useEffect } from "react";

const ScrollToTop = () => {

    const { top } = document.body.getBoundingClientRect();
    useEffect(() => {
        window.scrollTo({ top });
    }, []);
    return null;
};

export default ScrollToTop;