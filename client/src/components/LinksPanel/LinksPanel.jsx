import React from "react";
import "./LinksPanel.css";

const LinksPanel = props => (
    <ul className="font-opensans font-size-p75em padding-bottom-1em padding-top-1em">
        {props.links.map(result=>{
            return(
                <li><a target ="_blank" href={result.url}>{result.title}</a></li>
            )
        })}
    </ul>
)

export default LinksPanel;