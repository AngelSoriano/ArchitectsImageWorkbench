/**
 * Created by naelin on 4/17/17.
 */

function getImageIdsAndConfidenceLevels(jsonObj) {
    var imageResults = {}
    for (var key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            if (key == "hits") {
                if (jsonObj[key].total != 0) {
                    var json = jsonObj[key].hits;
                    for (var key in json) {
                        if (json.hasOwnProperty(key)) {
                            if (json[key]._source.Images == undefined) {
                            } else {
                                var imageArray = json[key]._source.Images

                                for (var key in imageArray) {
                                    imageResults[key] = imageArray[key]
                                }
                            }

                        }
                    }

                }
            }

        }

    }
    return imageResults
}

module.exports = {
    getImageIdsAndConfidenceLevels: getImageIdsAndConfidenceLevels
};