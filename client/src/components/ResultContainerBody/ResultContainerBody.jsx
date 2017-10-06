import React from "react";
import IconAndNote from "../IconAndNote"
import DescriptionAndNote from "../DescriptionAndNote"

const ResultContainerBody = props => (
    
    <div>
        <div className="float-left width-50pc">
            {props.site.entrance.rating===1 &&
                <IconAndNote
                    title="Entrance"
                    label="Accessible"
                    alt="'Accessible' Icon"
                    logoPath="../assets/icons/accessible.svg"
                    notes={props.site.entrance.notes}
                />
            }
            {props.site.entrance.rating===0 &&
                <IconAndNote
                    title="Entrance"
                    label="Not Accessible"
                    alt="'Not Accessible' Icon"
                    logoPath="../assets/icons/not-accessible.svg"
                    notes={props.site.entrance.notes}
                />
            }
        </div>
        <div className="float-left width-50pc">
            {props.site.bathroom.rating===1 &&
                <IconAndNote
                    title="Bathroom"
                    label="Accessible"
                    alt="'Accessible' Icon"
                    logoPath="../assets/icons/accessible.svg"
                    notes={props.site.bathroom.notes}
                />
            }
            {props.site.bathroom.rating===0 &&
                <IconAndNote
                    title="Bathroom"
                    label="Not Accessible"
                    alt="'Not Accessible' Icon"
                    logoPath="../assets/icons/not-accessible.svg"
                    notes={props.site.bathroom.notes}
                />
            }
        </div>
        <div className="display-block margin-auto width-85pc">
            <DescriptionAndNote
                description={props.site.description}
                notes={props.site.notes}
            />
        </div>
    </div>
);

export default ResultContainerBody;