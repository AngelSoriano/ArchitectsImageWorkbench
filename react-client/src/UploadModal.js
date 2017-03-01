/**
 * Created by naelin on 2/27/17.
 */

import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UploadDropzone from './UploadDropzone'
import UploadDetailsForm from './UploadDetailsForm'
import ImageService from './service/ImageService'

class UploadModal extends Component {
    render() {
        return (
            <div className="UploadModal">

                <Modal show={ this.state.showModal } onHide={ this.closeUploadModal }>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload an image</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/*Drag and drop image upload component*/}
                        <UploadDropzone onImageDrop={this.onImageDrop }/>

                        <UploadDetailsForm setValidationState={this.setValidationState}/>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeUploadModal}>Cancel</Button>
                        <Button bsStyle="info" onClick={this.upload}>Confirm</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }

    constructor(props) {
        super(props);

        this.state = {
            showModal: true,
            uploadedImage: null,
            inputValidationState: ''
        }

        this.onImageDrop = this.onImageDrop.bind(this)
        this.closeUploadModal = this.closeUploadModal.bind(this)
        this.setValidationState = this.setValidationState.bind(this)
        this.upload = this.upload.bind(this)
    }

    onImageDrop(file) {
        this.setState({uploadedImage: file});
    }

    handleImageUpload(file) {
        ImageService.upload(file)
    }

    closeUploadModal() {
        this.setState({showModal: false})
    }

    setValidationState(status) {
        this.setState({inputValidationState: status})
    }

    upload() {
        if (this.state.inputValidationState === 'error' || this.state.inputValidationState === '') {
            console.log("Input error")
        } else if (this.state.uploadedImage === null) {
            console.log('No image selected error')
        } else
            this.handleImageUpload(this.state.uploadedImage)
            console.log('Image uploaded')
            this.closeUploadModal()
    }

}

export default UploadModal