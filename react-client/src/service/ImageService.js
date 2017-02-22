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

// Root reference to Firebase Storage instance (where images will be saved)
var storageRef = firebase.storage().ref();

function upload(file) {
    // Generate unique id for image
    const uniqueId = uuidV4()

    // Create a new reference for where newly uploaded image will be stored in Firebase Storage
    // TODO: Allow users to enter a name/title for uploaded image
    var imageRef = storageRef.child(uniqueId + "/temp-name");

    console.log(file)
    if (!file) {
        console.log('error')
    }

    // Store image into Firebase Storage
    imageRef.put(file).then(function(snapshot) {
        console.log('Uploaded an image!');
    });
}



const ImageService = { upload };
export default ImageService;