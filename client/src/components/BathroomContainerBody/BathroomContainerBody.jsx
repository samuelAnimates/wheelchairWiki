import React from "react";
import IconAndNote from "../IconAndNote"
import DescriptionAndNote from "../DescriptionAndNote"

const BathroomContainerBody = props => (
    
    <div>

        <DescriptionAndNote
            description={props.bathroom.notes}
        />

    </div>
);

export default BathroomContainerBody;