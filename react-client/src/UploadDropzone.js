/**
 * Created by naelin on 2/18/17.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import ImageService from './service/ImageService'

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
                    {this.state.uploadedImageReference === '' ? null :
                        <div>
                            <p>{this.state.uploadedImage.name}</p>
                            <img src={this.state.uploadedImageReference}/>
                        </div>}
                </div>
            </div>

        )
    }

    constructor(props) {
        super(props);
        this.onImageDrop = this.onImageDrop.bind(this)
        this.state = {
            uploadedImage: null,
            uploadedImageReference: ''
        };

    }

    onImageDrop(files) {
        this.setState({
            uploadedImage: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        ImageService.upload(file)
    }
}

export default UploadDropzone