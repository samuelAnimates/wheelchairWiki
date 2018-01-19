import React from "react";
import "./ScrollToTopButton.css";

const scrollToTableOfContents = () => {
    window.scrollTo(0, 200);
    document.getElementById("table-of-contents").focus();
}

const ScrollToTopButton = props => (
    <div className="position-fixed responsive-hidden">
        <button className="bg-255-255-255-p94 border-radius-50pc height-4p25em width-4p25em" onClick={scrollToTableOfContents}>
            TOP
        </button>
    </div>
)

export default ScrollToTopButton;