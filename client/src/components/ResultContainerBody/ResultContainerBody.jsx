import React, { Component } from 'react';
import IconAndNote from "../IconAndNote"
import EditButton from "../EditButton"
import DescriptionAndNote from "../DescriptionAndNote"
import ModalSiteEdit from '../../components/ModalSiteEdit';

class ResultContainerBody extends Component {
    state={
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render (){
        return(
            <div className="group">
                
                <div >

                    <div className="float-left width-50pc">
                        {this.props.site.entrance === 1 &&
                            <IconAndNote
                                title="Entrance"
                                label="Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Accessible' Icon"
                                logoPath="../assets/icons/accessible.svg"
                                notes={this.props.site.entranceNotes}
                            />
                        }
                        {this.props.site.entrance === 0.5 &&
                            <IconAndNote
                                title="Entrance"
                                label="Semi Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Semi Accessible' Icon"
                                logoPath="../assets/icons/semi-accessible.svg"
                                notes={this.props.site.entranceNotes}
                            />
                        }
                        {this.props.site.entrance === 0 &&
                            <IconAndNote
                                title="Entrance"
                                label="Not Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Not Accessible' Icon"
                                logoPath="../assets/icons/not-accessible.svg"
                                notes={this.props.site.entranceNotes}
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
                                notes={this.props.site.bathroomNotes}
                            />
                        }
                        {this.props.site.bathroom === 0.5 &&
                            <IconAndNote
                                title="Bathroom"
                                label="Semi Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Semi Accessible' Icon"
                                logoPath="../assets/icons/semi-accessible.svg"
                                notes={this.props.site.bathroomNotes}
                            />
                        }
                        {this.props.site.bathroom === 0 &&
                            <IconAndNote
                                title="Bathroom"
                                label="Not Accessible"
                                labelColor={this.props.labelColor}
                                alt="'Not Accessible' Icon"
                                logoPath="../assets/icons/not-accessible.svg"
                                notes={this.props.site.bathroomNotes}
                            />
                        }
                    </div>

                </div>

                <div className="clear-both">
                    <DescriptionAndNote
                        description={this.props.site.description}
                        notes={this.props.site.notes}
                    />
                </div>
                <div className="text-center">
                    <EditButton onClick={this.toggleModal}/>
                    <ModalSiteEdit show={this.state.isOpen} onClose={this.toggleModal}
                        site={this.props.site}
                    />
                </div>

            </div>
    )}
}

export default ResultContainerBody;