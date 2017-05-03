/**
 * Created by naelin on 2/27/17.
 */

import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import UploadModal from './UploadModal'
import '../styles/App.css'

class UploadComponent extends Component {
    render() {
        return (
            <div className="UploadComponent">
                <Button className="UploadButton" bsStyle="warning" onClick={this.showUploadModal}>Upload</Button>

                {this.state.showModal ? <UploadModal closeUploadModal={this.closeUploadModal}/> : null}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {showModal: false}
        this.showUploadModal = this.showUploadModal.bind(this)
        this.closeUploadModal = this.closeUploadModal.bind(this)

    }

    showUploadModal() {
        this.setState({showModal: true})
    }

    closeUploadModal() {
        this.setState({showModal: false})
    }

}

export default UploadComponent