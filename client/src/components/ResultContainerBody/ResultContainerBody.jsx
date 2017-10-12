import React from "react";
import IconAndNote from "../IconAndNote"
import DescriptionAndNote from "../DescriptionAndNote"

const ResultContainerBody = props => (
    
    <div className="group">
        
        <div >

            <div className="float-left width-50pc">
                {props.site.entrance === 1 &&
                    <IconAndNote
                        title="Entrance"
                        label="Accessible"
                        labelColor={props.labelColor}
                        alt="'Accessible' Icon"
                        logoPath="../assets/icons/accessible.svg"
                        notes={props.site.entranceNotes}
                    />
                }
                {props.site.entrance === 0.5 &&
                    <IconAndNote
                        title="Entrance"
                        label="Semi Accessible"
                        labelColor={props.labelColor}
                        alt="'Semi Accessible' Icon"
                        logoPath="../assets/icons/semi-accessible.svg"
                        notes={props.site.entranceNotes}
                    />
                }
                {props.site.entrance === 0 &&
                    <IconAndNote
                        title="Entrance"
                        label="Not Accessible"
                        labelColor={props.labelColor}
                        alt="'Not Accessible' Icon"
                        logoPath="../assets/icons/not-accessible.svg"
                        notes={props.site.entranceNotes}
                    />
                }
            </div>

            <div className="float-left width-50pc">
                {props.site.bathroom === 1 &&
                    <IconAndNote
                        title="Bathroom"
                        label="Accessible"
                        labelColor={props.labelColor}
                        alt="'Accessible' Icon"
                        logoPath="../assets/icons/accessible.svg"
                        notes={props.site.bathroomNotes}
                    />
                }
                {props.site.bathroom === 0.5 &&
                    <IconAndNote
                        title="Bathroom"
                        label="Semi Accessible"
                        labelColor={props.labelColor}
                        alt="'Semi Accessible' Icon"
                        logoPath="../assets/icons/semi-accessible.svg"
                        notes={props.site.bathroomNotes}
                    />
                }
                {props.site.bathroom === 0 &&
                    <IconAndNote
                        title="Bathroom"
                        label="Not Accessible"
                        labelColor={props.labelColor}
                        alt="'Not Accessible' Icon"
                        logoPath="../assets/icons/not-accessible.svg"
                        notes={props.site.bathroomNotes}
                    />
                }
            </div>

        </div>

        <div className="clear-both">
            <DescriptionAndNote
                description={props.site.description}
                notes={props.site.notes}
            />
        </div>

    </div>
);

export default ResultContainerBody;