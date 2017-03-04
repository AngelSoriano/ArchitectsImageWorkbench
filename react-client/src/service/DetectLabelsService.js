/**
 * Created by anaperez on 3/1/17.
 */

function detectLabels(query) {
    var reader = new FileReader()

    console.log("https://firebasestorage.googleapis.com/v0/b/architects-image-workbench.appspot.com/o/images%2F054cfc47-aee0-47e4-9795-35c41f4052c5?alt=media&token=36db3d99-6df2-4a5b-8077-440a2cfc14a6")
    query = "https://firebasestorage.googleapis.com/v0/b/architects-image-workbench.appspot.com/o/images%2F054cfc47-aee0-47e4-9795-35c41f4052c5?alt=media&token=36db3d99-6df2-4a5b-8077-440a2cfc14a6"
    // var myBlob = new Blob([query], {type: "image/*"});
    // query = reader.readAsArrayBuffer(myBlob)
    fetch(`images/detect`);
}

const DetectLabelsService = {detectLabels}
export default DetectLabelsService;