/**
 * (Temporary solution)
 *
 * Created by naelin on 4/7/17.
 */

function getImageIdsAndConfidenceLevel(jsonObj) {
    var imageResults = []
    for (var key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            console.log("key: " + "val:" + jsonObj[key])
            if(key == "hits") {
                if(jsonObj[key].total != 0) {
                    var json = jsonObj[key].hits;
                    for (var key in json) {
                        if (json.hasOwnProperty(key)) {

                            if(json[key]._source.Images == undefined) {
                                console.log("empty")
                            } else {
                                imageArray = json[key]._source.Images

                                for(var key in imageArray) {
                                    imageResults[key] = imageArray[key]
                                }
                            }

                        }
                    }

                }
            }

        }
    }
}

module.exports = {
    getImageIdsAndConfidenceLevel: getImageIdsAndConfidenceLevel
};

