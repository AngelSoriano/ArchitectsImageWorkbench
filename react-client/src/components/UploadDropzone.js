/**
 * Created by naelin on 2/18/17.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Image} from 'react-bootstrap';

class UploadDropzone extends Component {

    render() {
        return (
            <div className="UploadDropzoneContainer">

                <Dropzone className="UploadDropzone"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>

                {/*<input className="fileInput"*/}
                {/*type="file"*/}
                {/*onChange={(e) => this.handleChange(e)}/>*/}
                <br/>
                <div>
                    {
                        this.state.uploadedImage === null ? null :
                            <div>
                                <Image src={this.getImagePreview()} responsive/>
                                <br/>

                            </div>
                    }

                </div>

            </div>

        )
    }

    constructor(props) {
        super(props);

        this.state = {
            uploadedImage: null,
            file: ''
        };

        this.onImageDrop = this.onImageDrop.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    onImageDrop(files) {
        this.setState({uploadedImage: files[0]}, function () {
            this.props.onImageDrop(this.state.uploadedImage)
            console.log(this.state.uploadedImage)
        });

    }

    getImagePreview() {
        return this.state.uploadedImage.preview
    }

    handleChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({uploadedImage: file}, function () {
                this.props.onImageDrop(this.state.uploadedImage)
            });
        }

        reader.readAsDataURL(file)
        console.log(file)
    }

}

export default UploadDropzone