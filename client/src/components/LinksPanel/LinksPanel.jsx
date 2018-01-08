import React from "react";
import "./LinksPanel.css";

const LinksPanel = props => (
    <ul className="font-opensans font-size-p75em padding-bottom-p5em padding-top-p5em text-center">
        {props.links.map(result=>{
            return(
                <div className="padding-left-p25em padding-right-p25em width-33p33pc">
                    <div className="border-style-solid border-width-p5px hover-background-color-239-246-248 padding-bottom-1em padding-left-p25em padding-right-p25em padding-top-1em">
                        <a target ="_blank" href={result.url}>{result.title}</a>
                    </div>
                </div>
            )
        })}
    </ul>
)

export default LinksPanel;