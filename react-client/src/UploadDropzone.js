/**
 * Created by naelin on 2/18/17.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Image, Grid, Row, Col} from 'react-bootstrap';

class UploadDropzone extends Component {

    render() {
        return (
            <div className="UploadDropzone">

                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>

                <div>
                    {
                        this.state.uploadedImage === null ? null :
                            <div>
                                <p>{this.state.uploadedImage.name}</p>
                                <Image src={this.getImagePreview()} responsive/>
                            </div>
                    }
                </div>

            </div>

        )
    }

    constructor(props) {
        super(props);

        this.state = {
            uploadedImage: null
        };

        this.onImageDrop = this.onImageDrop.bind(this)
    }

    onImageDrop(files) {
        this.setState({uploadedImage: files[0]}, function() {
            this.props.onImageDrop(this.state.uploadedImage)
        });

    }

    getImagePreview() {
        return this.state.uploadedImage.preview
    }

}

export default UploadDropzone