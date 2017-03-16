/**
 * Created by naelin on 2/27/17.
 */

import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UploadDropzone from './UploadDropzone'
import UploadDetailsForm from './UploadDetailsForm'
import ImageService from '../service/ImageService'

class UploadModal extends Component {
    render() {
        return (
            <div className="UploadModal">

                <Modal show={this.state.showModal} onHide={this.closeUploadModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload an image</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/*Drag and drop image upload component*/}
                        <UploadDropzone onImageDrop={this.onImageDrop }/>
                        {/*The upload input form*/}
                        <UploadDetailsForm setValidationState={this.setValidationState} setImageMeta={this.setImageMeta}/>
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
            inputValidationState: '',

            imageTitle: '',
            imageDescription: ''
        }

        this.onImageDrop = this.onImageDrop.bind(this)
        this.closeUploadModal = this.closeUploadModal.bind(this)
        this.setValidationState = this.setValidationState.bind(this)
        this.upload = this.upload.bind(this)
        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.setImageMeta = this.setImageMeta.bind(this)
    }

    onImageDrop(file) {
        this.setState({uploadedImage: file});
    }

    handleImageUpload(file) {
        ImageService.upload(file, (imageKey) => {
            ImageService.detectLabels(imageKey, (labels) => {
                var title = this.state.imageTitle
                var description = this.state.imageDescription
                ImageService.storeImageMeta(imageKey, title, description, labels);
            })
        });
    }

    closeUploadModal() {
        this.setState({showModal: false}, function () {
            this.props.closeUploadModal(this.state.showModal)
        })
    }

    setValidationState(status) {
        this.setState({inputValidationState: status})
    }

    setImageMeta(title, description) {
        this.setState({imageTitle: title, imageDescription: description})
    }

    /**
     * TODO:
     *  1. Show loading spinner while uploading
     *  2. Notify user when upload is successful
     */
    upload() {
        if (this.state.inputValidationState === 'error' || this.state.inputValidationState === '') {
            console.log("Input error")
        } else if (this.state.uploadedImage === null) {
            console.log('No image selected error')
        } else
            this.handleImageUpload(this.state.uploadedImage)
        this.closeUploadModal()
    }
}

export default UploadModal