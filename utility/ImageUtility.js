/**
 * Created by naelin on 3/3/17.
 */

/**
 * Returns the appropriate file extension according to the mimetype/filetype
 *
 * @param file
 * @returns {String}
 */
function getExtension(file) {
    if(file.mimetype == 'image/jpeg' || file.type == 'image/jpeg')
        return ".jpg"
    else return ".png"
}

const ImageUtility = {getExtension, formatLabelsData};
export default ImageUtility;