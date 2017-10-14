import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ModalLocationEdit.css"
import API from "../../utils/API.js";

class ModalLocationEdit extends Component {
  
  state = {
    name: "",
    description: "",
    notes: "",
    entranceNotes: "",
    bathroomNotes: "",
    type: "",
    id: "",
  };

  componentDidMount() {
    this.setState({
      name: this.props.site.name,
      description: this.props.site.description,
      notes: this.props.site.notes,
      entranceNotes: this.props.site.entranceNotes,
      bathroomNotes: this.props.site.bathroomNotes,
      type: this.props.site.type,
      id: this.props.site._id
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  editPlace = (placeType, id, editedPlaceData) => {
    API.editPlace(placeType, id, editedPlaceData)
    .then(res =>{
      console.log(res.data);
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
      API.editPlace(this.state.type, this.state.id, editedPlaceData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    // Render nothing if the "show" prop is false
   if(!this.props.show) {
      return null;
    }


    return (
      <div className="backdrop">

        <div className="modal">
          
          <div className="font-exo">
            <form>
              <div className="clear-both">
                <div className="float-left text-right width-8em">
                  Name
                </div>
                <div className="text-left">
                  <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name}/>
                </div>
              </div>
              <div className="clear-both">
                <div className="float-left text-right width-8em">
                  Description
                </div>
                <div className="text-left">
                  <input type="text" name="description" onChange={this.handleInputChange} value={this.state.description}/>
                </div>
              </div>
              <div className="clear-both">
                <div className="float-left text-right width-8em">
                  Notes
                </div>
                <div className="text-left">
                  <input type="text" name="notes" onChange={this.handleInputChange} value={this.state.notes}/>
                </div>
              </div>
              <div className="clear-both">
                <div className="float-left text-right width-8em">
                  EntranceNotes
                </div>
                <div className="text-left">
                  <input type="text" name="entranceNotes" onChange={this.handleInputChange} value={this.state.entranceNotes}/>
                </div>
              </div>
              <div className="clear-both">
                  <div className="float-left text-right width-8em">
                    Bathroom Notes
                  </div>
                  <div className="text-left">
                    <input type="text" name="bathroomNotes" onChange={this.handleInputChange} value={this.state.bathroomNotes}/>
                  </div>
              </div>
              <div>
                <input  type="submit" onClick={this.handleFormSubmit} value="Submit"/>
              </div>
            </form> 
          </div>
          
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>

        </div>

      </div>
    );
  }
}

ModalLocationEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalLocationEdit;