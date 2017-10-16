import React, { Component } from 'react';
import API from "../../utils/API.js";
import IconAndNote from "../IconAndNote"
import InputText from "../InputText"
import EditButton from "../EditButton";
import DescriptionAndNote from "../DescriptionAndNote"
import LinksPanel from "../LinksPanel";
import ModalLocationEdit from '../ModalLocationEdit';

class BathroomContainerBody extends Component {
    
    state={
        name: "",
        description: "",
        notes: "",
        type: "",
        id: "",
        latitude: "",
        links: "",
        longitude: "",
        isOpen: false
    }

    componentDidMount() {
        this.setState({
            name: this.props.bathroom.name,
            description: this.props.bathroom.description,
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
        .catch(err => console.log(err));
    
    }

    getPlace = (placeType, id) => {
        API.getPlace(placeType, id)
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
        .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        if (this.state.name) {
          let editedPlaceData = {
            name: this.state.name,
            description: this.state.description,
            notes: this.state.note
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
    
    render(){
    
        return (    
            <div>

                <DescriptionAndNote
                    description={this.props.bathroom.notes}
                />

                <div className="text-center">
                    <EditButton onClick={this.toggleModal}/>
                    <ModalLocationEdit show={this.state.isOpen}  onClose={this.toggleModal}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        site={this.props.site}
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
                                    value={this.state.notes}
                                    name={"notes"}
                                    label={"Notes"}
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

export default BathroomContainerBody;