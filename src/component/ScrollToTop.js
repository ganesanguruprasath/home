import { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);

        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {visible &&
                <button
                    style={{
                        // position: "fixed",
                        // bottom: "30px",
                        // right: "30px",
                        backgroundColor: "transparent",
                        // border: "none",
                        cursor: "pointer",
                        // display: visible ? "inline" : "none"
                    }}
                    className="button border-0 fs-1 p-md-5 position-fixed bottom-0 end-0"
                    onClick={scrollToTop}
                >
                    <IoIosArrowDropupCircle color="yellow" />
                </button>
            }
        </>
    );
};

export default ScrollButton;
