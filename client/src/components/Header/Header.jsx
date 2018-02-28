import React from "react";
import "./Header.css";
import GradientBackground from "../GradientBackground";

const Header = props => (
    <header className="border-bottom-2px-248-248-248">
        <GradientBackground>
            <div className="text-center width-100pc">
                {props.children}
            </div>
        </GradientBackground>
    </header>
);

export default Header;