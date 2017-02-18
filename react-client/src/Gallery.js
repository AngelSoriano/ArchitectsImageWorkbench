import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    //photoTransfer is a placeholder method for the database containing images
    //This method will be removed or altered when the front end and the database are linked
    photoTransfer (){
        var source = 'https://cloud.chiefarchitect.com/1/samples/exteriors/modern-bungalow.jpg';
        var source_width = 681;
        var source_height = 1024;
        var ratio = 1.5;
        return (this.uploadPhoto(source,source_width,source_height,ratio));
    }

    uploadPhoto(source, source_width, source_height, ratio){

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

    spreadPhotos(){
        const PHOTO_SET = [];
        for (var i=0; i<9; i++){
            PHOTO_SET.push(this.photoTransfer());
        }

        return PHOTO_SET;
    }


    render() {
        return (
            <Gallery photos={this.spreadPhotos()} />
        );
    }
}




























