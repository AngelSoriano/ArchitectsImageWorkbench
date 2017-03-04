/**
 * This class performs image-related services
 *
 * Created by naelin on 2/18/17.
 *
 */

import * as firebase from "firebase";
import '../client'
// Allow UUID generation
const uuidV4 = require('uuid/v4');

/**
 *  Uploads the image file to storage
 *
 *  @param String $file
 *      The file path for the image we want to store
 *
 *  @todo
 *      1. Better error-handling
 *
 */
function upload(file) {
    // Root reference to Firebase Storage instance (where images will be saved)
    var storageRef = firebase.storage().ref();

    // Generate unique id for image
    const uniqueId = uuidV4()

    // Create a new reference for where newly uploaded image will be stored in Firebase Storage
    var imageRef = storageRef.child("images/" + uniqueId);

    console.log(file)
    if (!file) {
        console.log('error')
    }

    // Store image into Firebase Storage
    imageRef.put(file).then(function (snapshot) {
        console.log('Uploaded an image!');
    });

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
    imageRef.getDownloadURL().then(function(url) {
        // Once we have the download URL, then assign it to imageUrl
        const imageUrl = url;
        console.log(imageUrl.toString());
        return imageUrl.toString();


    }).catch(function(error) {
        // If anything goes wrong while getting the download URL, log the error
        console.error(error);
    });
}

const ImageService = {upload, retrieve};
export default ImageService;