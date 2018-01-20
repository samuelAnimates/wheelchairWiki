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

        <div className="bg-255-254-248 modal">
          
          {this.props.children}
          
          <div className="footer">
            <button className="bg-white border-color-240-240-240" onClick={this.props.onClose}>
              Cancel
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