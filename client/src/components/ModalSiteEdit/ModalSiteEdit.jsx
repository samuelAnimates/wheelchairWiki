import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ModalSiteEdit.css"

class ModalSiteEdit extends Component {
  
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
                Description:<input type="text" name="lastname" value={this.props.site.description}/>
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

ModalSiteEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalSiteEdit;