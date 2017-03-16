import React, {Component} from 'react'
import Gallery from 'react-photo-gallery';

class ImageGallery extends Component {
    render() {
        return (
            <div className="ImageGallery">

                <Gallery photos={this.spreadPhotos()}/>
            </div>
        )
    }

    spreadPhotos() {

        var imageKeys = ["IMG00000000000000001", "b7d0a852-6d46-4d90-9a6e-80a3d37cf501", "87c9b2d8-0939-44aa-9bdc-6e2558d6417f", "18e76dea-c688-4c12-b2a5-166f88b1661d"];

        const PHOTO_SET = [];

        for (var i = 0; i < imageKeys.length; i++) {
            PHOTO_SET.push(this.photoTransfer(imageKeys[i]));
        }

        return PHOTO_SET;
    }

    photoTransfer(imageKey) {
        var source = 'https://s3-us-west-2.amazonaws.com/aiw-bucket/' + imageKey;
        var source_width = 681;
        var source_height = 1024;
        var ratio = 1.5;
        return (this.uploadPhoto(source, source_width, source_height, ratio));
    }

    uploadPhoto(source, source_width, source_height, ratio) {
        var PHOTO_SET =
            {
                src: source,
                width: source_width,
                height: source_height,
                aspectRatio: ratio,
                lightboxImage: {
                    src: source,
                }
            }
        return PHOTO_SET;
    }

}

export default ImageGallery






















