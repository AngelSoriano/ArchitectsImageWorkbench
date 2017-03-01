/**
 * Created by naelin on 2/27/17.
 */

import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import UploadModal from './UploadModal'

class UploadComponent extends Component {
    render() {
        return (
            <div className="UploadComponent">
                <Button bsStyle="warning" onClick={this.showUploadModal}>Upload</Button>

                {this.state.showModal ? <UploadModal/> : null}
            </div>
        )
    }

    constructor(props) {
        super(props);

        this.state = {showModal: false}

        this.showUploadModal = this.showUploadModal.bind(this)
    }

    showUploadModal() {
        this.setState({showModal: true});
    }

}

export default UploadComponent