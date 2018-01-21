import React, { Component } from 'react';
import API from "../../utils/API.js";
import DescriptionAndNote from "../DescriptionAndNote";
import EditButton from "../EditButton";
import Fieldset from "../Fieldset";
import IconAndNote from "../IconAndNote"
import InputText from "../InputText"
import InputTextArea from "../InputTextArea"
import LinksPanel from "../LinksPanel";
import ModalLocationEdit from '../ModalLocationEdit';
import ResultContainerHeader from "../ResultContainerHeader"

class ResultContainerBody extends Component {
    state={
        name: "",
        description: "",
        notes: "",
        entranceNotes: "",
        bathroomNotes: "",
        id: "",
        entrance: null,
        bathroom: null,
        longitude: null,
        latitude: null,
        links: [],
        type: "",
        isOpen: false
    }

    componentDidMount() {
        this.setState({
            name: this.props.site.name,
            description: this.props.site.description,
            notes: this.props.site.notes,
            entranceNotes: this.props.site.entranceNotes,
            bathroomNotes: this.props.site.bathroomNotes,
            id: this.props.site._id,
            entrance: this.props.site.entrance,
            bathroom: this.props.site.bathroom,
            longitude: this.props.site.longitude,
            latitude: this.props.site.latitude,
            links: this.props.site.links,
            type: this.props.site.type
        });
    }
    
    editPlace = (placeType, id, editedPlaceData) => {
        
        let config = {
          headers: {
            Authorization: "JWT "+localStorage.getItem("token"),
          }
        };
    
        API.editPlace(placeType, id, editedPlaceData, config)
        .then(res => {
            this.setState({
                bathroom: res.data.bathroom,
                bathroomNotes: res.data.bathroomNotes,
                description: res.data.description,
                entrance: res.data.entrance,
                entranceNotes: res.data.entranceNotes,
                latitude: res.data.latitude,
                links: res.data.links,
                longitude: res.data.longitude,
                name: res.data.name,
                notes: res.data.notes,
                type: res.data.type
            });
        })
        .catch(err => console.log(err));
    }

    getPlace = (placeType, id) => {
        API.getPlace(placeType, id)
        .then(res => {
            this.setState({
                bathroom: res.data.bathroom,
                bathroomNotes: res.data.bathroomNotes,
                description: res.data.description,
                entrance: res.data.entrance,
                entranceNotes: res.data.entranceNotes,
                latitude: res.data.latitude,
                links: res.data.links,
                longitude: res.data.longitude,
                name: res.data.name,
                notes: res.data.notes,
                type: res.data.type
            });
        })
        .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        
        event.preventDefault();
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === "" || localStorage.getItem("token") === undefined){
            alert("Sorry, you must be logged in to edit this information!");
            this.toggleModal();
        }
        else if (this.state.name && this.state.description) {
          let editedPlaceData = {
            name: this.state.name,
            description: this.state.description,
            notes: this.state.notes,
            entranceNotes: this.state.entranceNotes,
            bathroomNotes: this.state.bathroomNotes
          };
          this.editPlace(this.state.type, this.state.id, editedPlaceData);
          this.toggleModal();
        }
        else{
            alert("Oops! Looks like there's something wrong with the info you entered. Please check your input and try again!");
            this.toggleModal();
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleInputChangeTextArea = event => {
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.notes);
    };

    toggleModal = () => {
        if (this.state.isOpen){
            this.setState({
                isOpen: !this.state.isOpen
            });
            document.body.style.overflow = "scroll";
        }
        else{
            this.setState({
                isOpen: !this.state.isOpen
            });
            document.body.style.overflow = "hidden";
            this.getPlace(this.state.type, this.state.id);
        }
        
    }

    render (){
        return(
            <div>
                <div>
                    <div id={this.state.id}>
                        <ResultContainerHeader
                            title= {this.state.name}
                            bgColor= {this.props.labelColor}
                            fontColor= {this.props.fontColor}
                        />
                    </div>
                    <div className="float-left width-50pc">
                        {this.props.site.entrance === 1 &&
                            <IconAndNote
                                title="Entrance"
                                label="Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Accessible' Icon"
                                logoPath="../assets/icons/accessible.svg"
                                notes={this.state.entranceNotes}
                            />
                        }
                        {this.props.site.entrance === 0.5 &&
                            <IconAndNote
                                title="Entrance"
                                label="Mixed Accessibility"
                                labelColor={this.props.labelColor}
                                alt="'Mixed Accessibility' Icon"
                                logoPath="../assets/icons/semi-accessible.svg"
                                notes={this.state.entranceNotes}
                            />
                        }
                        {this.props.site.entrance === 0 &&
                            <IconAndNote
                                title="Entrance"
                                label="Not Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Not Accessible' Icon"
                                logoPath="../assets/icons/not-accessible.svg"
                                notes={this.state.entranceNotes}
                            />
                        }
                    </div>

                    <div className="float-left width-50pc">
                        {this.props.site.bathroom === 1 &&
                            <IconAndNote
                                title="Bathroom"
                                label="Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Accessible' Icon"
                                logoPath="../assets/icons/accessible.svg"
                                notes={this.state.bathroomNotes}
                            />
                        }
                        {this.props.site.bathroom === 0.5 &&
                            <IconAndNote
                                title="Bathroom"
                                label="Semi Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Semi Accessible' Icon"
                                logoPath="../assets/icons/semi-accessible.svg"
                                notes={this.state.bathroomNotes}
                            />
                        }
                        {this.props.site.bathroom === 0 &&
                            <IconAndNote
                                title="Bathroom"
                                label="Not Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Not Accessible' Icon"
                                logoPath="../assets/icons/not-accessible.svg"
                                notes={this.state.bathroomNotes}
                            />
                        }
                    </div>

                </div>

                <div className="clear-both">
                    <DescriptionAndNote
                        description={this.state.description}
                        notes={this.state.notes}
                    />
                </div>

                <div className="padding-left-p5em padding-right-p5em">
                    <h5 className="text-center">Links</h5>
                    <LinksPanel
                        links= {this.state.links}
                    />
                </div>

                <div className="text-center">
                    <EditButton onClick={this.toggleModal}/>
                    <div className="display-block margin-auto text-center">
                        <ModalLocationEdit show={this.state.isOpen}  onClose={this.toggleModal}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            site={{bathroom: this.state.bathroom,
                                bathroomNotes: this.state.bathroomNotes,
                                description: this.state.description,
                                entrance: this.state.entrance,
                                entranceNotes: this.state.entranceNotes,
                                latitude: this.state.latitude,
                                links: this.state.links,
                                longitude: this.state.longitude,
                                name: this.state.name,
                                notes: this.state.notes,
                                type: this.state.type}}
                        >
                            <div className="font-exo padding-top-1em">
                                <form className="display-block margin-auto text-center" id={"form-id-" + this.state.id}>
                                    <div className="width-75pc">
                                        <Fieldset legend="Overview">
                                            <InputText
                                                onChange={this.handleInputChange}
                                                value={this.state.name}
                                                name={"name"}
                                                label={"Name:"}
                                                form={"form-id-" + this.state.id}
                                            />
                                            <div className="clear-both">
                                                <InputText
                                                    onChange={this.handleInputChange}
                                                    value={this.state.description}
                                                    name={"description"}
                                                    label={"Description:"}
                                                    form={"form-id-" + this.state.id}
                                                />
                                            </div>
                                            <div className="clear-both">
                                                <InputTextArea
                                                    onInput={this.handleInputChangeTextArea}
                                                    containerId={this.state.id}
                                                    value={this.state.notes}
                                                    name={"notes"}
                                                    label={"Overall Notes:"}
                                                    form={"form-id-" + this.state.id}
                                                />
                                            </div>
                                        </Fieldset>
                                    </div>
                                    <div>
                                        <div className="float-left width-50pc">
                                            <Fieldset legend="Entrance">

                                                    <InputText
                                                        onInput={this.handleInputChange}
                                                        value={this.state.entranceNotes}
                                                        name={"entranceNotes"}
                                                        label={"Entrance Notes:"}
                                                        form={"form-id-" + this.state.id}
                                                    />
                                            </Fieldset>
                                        </div>
                                        <div className="float-left width-50pc">
                                            <Fieldset legend="Bathroom">

                                                    <div className="clear-both">
                                                        <InputText
                                                            onChange={this.handleInputChange}
                                                            value={this.state.bathroomNotes}
                                                            name={"bathroomNotes"}
                                                            label={"Bathroom Notes:"}
                                                            form={"form-id-" + this.state.id}
                                                        />
                                                    </div>
                                            </Fieldset>
                                        </div>
                                    </div>
                                    <div className="clear-both">
                                        <input className="bg-white border-color-240-240-240" type="submit" onClick={this.handleFormSubmit} value="Submit"/>
                                    </div>
                                </form> 
                            </div>
                        </ModalLocationEdit>
                    </div>
                </div>

            </div>
    )}
}

export default ResultContainerBody;