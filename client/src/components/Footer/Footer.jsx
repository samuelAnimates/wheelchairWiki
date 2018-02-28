import React from "react";
import "./Footer.css";
import GradientBackground from "../GradientBackground";

const Footer = props => {
    return (
        <footer className="bg-255-253-242 border-top-2px-248-248-248 font-opensans height-3em text-center"> 
            <GradientBackground>
                Made with love by a very small team. <a href="https://github.com/smendez92/wheelchairWiki/" target="_blank" rel="noopener noreferrer">Click here to fork us on GitHub.</a>
            </GradientBackground>
        </footer>
)}

export default Footer;