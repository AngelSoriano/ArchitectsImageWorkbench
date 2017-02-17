import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
        return (
            <Gallery photos={PHOTO_SET} />
        );
    }
}

const PHOTO_SET = [
    {
        src: 'https://cloud.chiefarchitect.com/1/samples/exteriors/modern-bungalow.jpg',
        width: 681,
        height: 1024,
        aspectRatio: 1.5,
        lightboxImage:{
            src: 'https://cloud.chiefarchitect.com/1/samples/exteriors/modern-bungalow.jpg',
        }
    },
    {
        src: 'https://s-media-cache-ak0.pinimg.com/originals/9b/6c/d3/9b6cd364c18fc59e813d7a32d41798d4.jpg',
        width: 600,
        height: 600,
        aspectRatio: 1,
        lightboxImage:{
            src: 'https://s-media-cache-ak0.pinimg.com/originals/9b/6c/d3/9b6cd364c18fc59e813d7a32d41798d4.jpg',
        }
    },
    {
        src: 'http://example.com/example/img2_small.jpg',
        width: 600,
        height: 600,
        aspectRatio: 1,
        lightboxImage:{
            src: 'https://s-media-cache-ak0.pinimg.com/originals/9b/6c/d3/9b6cd364c18fc59e813d7a32d41798d4.jpg',
        }
    }
    
];
