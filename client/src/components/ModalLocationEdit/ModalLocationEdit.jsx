import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ModalLocationEdit.css"

class ModalLocationEdit extends Component {
  
  render() {
    // Render nothing if the "show" prop is false
   if(!this.props.show) {
      return null;
    }


    return (
      <div className="backdrop">

        <div className="modal">
          
          <div>
            <form>
              <div>
                Name:<input type="text" name="name" value={this.props.site.name}/>
              </div>
              <div>
                Description:<input type="text" name="lastName" value={this.props.site.description}/>
              </div>
              <div>
                Notes:<input type="text" name="notes" value={this.props.site.notes}/>
              </div>
              <div>
                Entrance Notes:<input type="text" name="entranceNotes" value={this.props.site.entranceNotes}/>
              </div>
              <div>
                Bathroom Notes:<input type="text" name="bathroomNotes" value={this.props.site.bathroomNotes}/>
              </div>
              <div>
                <input type="submit" value="Submit"/>
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