import React from "react";
import "./ResultContainer.css";
import ResultContainerHeader from "../ResultContainerHeader"
import IconAndNote from "../IconAndNote"
import DescriptionAndNote from "../DescriptionAndNote"


const ResultContainer = props => (
    <div className="bg-246-246-249 border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow group padding-bottom-1em width-100pc">
        <ResultContainerHeader
            siteName="SiteName"
        />
        <div className="float-left width-50pc">
            <IconAndNote
                title="Entrance"
                notes="Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
        </div>
        <div className="float-left width-50pc">
            <IconAndNote
                title="Bathroom"
                notes="Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
        </div>
        <div className="display-block margin-auto width-80pc">
            <DescriptionAndNote/>
        </div>
    </div>
);

export default ResultContainer;