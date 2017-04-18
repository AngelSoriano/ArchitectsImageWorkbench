/**
 * Created by naelin
 */

import React, {Component} from 'react'
import Gallery from 'react-photo-gallery';

class ImageGallery extends Component {
    render() {
        return (
            <div className="ImageGallery">
                <Gallery photos={this.getImageSet()}/>
            </div>
        )
    }

    getImageSet() {
        var imageIdsAndConfidenceLevels = JSON.parse(this.props.searchResults)

        var imageIds = [];
        for(var imageId in imageIdsAndConfidenceLevels) {
            imageIds.push(imageId)
        }

        const imageSet = [];
        for (var i = 0; i < imageIds.length; i++) {
            imageSet.push(this.getImage(imageIds[i]));
        }

        return imageSet;
    }

    getImage(imageId) {
        var source = 'https://s3-us-west-2.amazonaws.com/aiw-bucket/' + imageId;
        var source_width = 681;
        var source_height = 1024;
        var ratio = 1.5;

        var image =
            {
                src: source,
                width: source_width,
                height: source_height,
                aspectRatio: ratio,
                lightboxImage: {
                    src: source,
                }
            }

        return image;
    }

}

export default ImageGallery






















