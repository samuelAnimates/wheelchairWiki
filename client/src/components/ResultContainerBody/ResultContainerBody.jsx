import React, { Component } from 'react';
import API from "../../utils/API.js";
import IconAndNote from "../IconAndNote"
import InputText from "../InputText"
import EditButton from "../EditButton";
import DescriptionAndNote from "../DescriptionAndNote";
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
    
        if (this.state.name && this.state.description) {
          let editedPlaceData = {
            name: this.state.name,
            description: this.state.description,
            notes: this.state.note,
            entranceNotes: this.state.entranceNotes,
            bathroomNotes: this.state.bathroomNotes
          };
          this.editPlace(this.state.type, this.state.id, editedPlaceData);
          this.toggleModal();
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        this.getPlace(this.state.type, this.state.id);
    }

    render (){
        return(
            <div>
                <div>
                    <div>
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
                                label="Semi Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Semi Accessible' Icon"
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

                <div>
                    <h2 className="font-exo font-weight-400 text-center">Links</h2>
                    <LinksPanel
                        links= {this.state.links}
                    />
                </div>

                <div className="text-center">
                    <EditButton onClick={this.toggleModal}/>
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
                        <div className="font-exo display-block margin-auto text-center">
                            <form className="display-inlineblock">
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                    name={"name"}
                                    label={"Name"}
                                />
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.description}
                                    name={"description"}
                                    label={"Description"}
                                />
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.notes}
                                    name={"notes"}
                                    label={"Notes"}
                                />
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.entranceNotes}
                                    name={"entranceNotes"}
                                    label={"Entrance Notes"}
                                />
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.bathroomNotes}
                                    name={"bathroomNotes"}
                                    label={"Bathroom Notes"}
                                />
                                <div>
                                    <input  type="submit" onClick={this.handleFormSubmit} value="Submit"/>
                                </div>
                            </form> 
                        </div>
                    </ModalLocationEdit>
                </div>

            </div>
    )}
}

export default ResultContainerBody;