import React, { Component } from 'react';
import API from "../../utils/API.js";
import InputText from "../InputText"
import EditButton from "../EditButton";
import Description from "../Description"
import ModalLocationEdit from '../ModalLocationEdit';
import ResultContainerHeader from "../ResultContainerHeader"

class BathroomContainerBody extends Component {
    
    state={
        name: "",
        description: "",
        notes: "",
        type: "",
        id: "",
        latitude: null,
        links: [],
        longitude: null,
        isOpen: false
    }

    componentDidMount() {
        this.setState({
            name: this.props.bathroom.name,
            notes: this.props.bathroom.notes,
            type: this.props.bathroom.type,
            latitude: this.props.bathroom,
            links: this.props.bathroom,
            longitude: this.props.bathroom,
            id: this.props.bathroom._id,
            isOpen: false
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
                description: res.data.description,
                latitude: res.data.latitude,
                links: res.data.links,
                longitude: res.data.longitude,
                name: res.data.name,
                notes: res.data.notes,
                type: res.data.type
            });
        })
        .catch(err => {console.log(err)});
    
    }

    getPlace = (placeType, id) => {
        console.log("MADE IT TO THE REC")
        API.getPlace(placeType, id)
        .then(res => {
            console.log(res.data);
            this.setState({
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
        }
        else if (this.state.name) {
          let editedPlaceData = {
            name: this.state.name,
            description: this.state.description,
            notes: this.state.notes
          };
          this.editPlace(this.state.type, this.state.id, editedPlaceData);
          this.toggleModal();
        }
        else{
            alert("Oops! Looks like there's something wrong with the info. Please make sure the bathroom still has a name and some notes, and try again.");
        }     
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
    
    render(){
    
        return (    
            <div>

                <div>
                    <ResultContainerHeader
                        title= {this.state.name}
                        bgColor= {this.props.headingColor}
                        fontColor= {this.props.fontColor}
                    />
                </div>
                <div>
                    <Description
                        description={this.state.notes}
                    />
                </div>
                <div className="text-center">
                    <EditButton onClick={this.toggleModal}/>
                    <ModalLocationEdit show={this.state.isOpen}  onClose={this.toggleModal}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        site={{
                            latitude: this.state.latitude,
                            links: this.state.links,
                            longitude: this.state.longitude,
                            name: this.state.name,
                            notes: this.state.notes,
                            type: this.state.type}}
                    >
                        <div className="font-exo padding-top-1em text-center">
                            <form  className="display-block margin-auto text-center">
                                <InputText
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                    name={"name"}
                                    label={"Name:"}
                                />
                                <div className="clear-both">
                                    <InputText
                                        onChange={this.handleInputChange}
                                        value={this.state.notes}
                                        name={"notes"}
                                        label={"Notes:"}
                                    />
                                </div>
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

export default BathroomContainerBody;