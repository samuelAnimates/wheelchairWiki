import React, { Component }  from "react";
import Modal from "../Modal";

const ModalSiteEdit extends Component {
    
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="fullscreen">
                AYYYY
                <button onClick={this.props.onClose}>
                    Close
                </button>
            </div>
        )
    }
}
;

export default ModalSiteEdit;