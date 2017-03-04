/**
 * This class performs image-related services
 *
 * Created by naelin on 2/18/17.
 *
 */

import * as firebase from "firebase";
import '../client'
import request from 'superagent';

/**
 *  Pings server for images/upload endpoint
 *
 *  @param Object $file
 *      The file for the image we want to store
 *
 *
 */
function upload(file, callback) {
    return request.post('images/upload')
        .attach('imageFile', file)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) console.log(err);
            else {
                alert('File uploaded!');
                callback(JSON.stringify(res.text))
            }
        })

}

/**
 *  Retrieves the image URL according to the given image ID
 *
 *  @param String $imageId
 *      The ID of the image URL we want to retrieve from storage
 *
 *  @todo
 *      1. Better error-handling
 *
 */
function retrieve(imageId) {
    // Create a reference to Firebase Storage
    var storageRef = firebase.storage().ref();
    // Create a reference to the file we want to download
    var imageRef = storageRef.child('images/' + imageId);

    // Get the URL for the image we are retrieving
    imageRef.getDownloadURL().then(function (url) {
        // Once we have the download URL, then assign it to imageUrl
        const imageUrl = url;
        console.log(imageUrl.toString());
        return imageUrl.toString();


    }).catch(function (error) {
        // If anything goes wrong while getting the download URL, log the error
        console.error(error);
    });
}


const ImageService = {upload, retrieve};
export default ImageService;