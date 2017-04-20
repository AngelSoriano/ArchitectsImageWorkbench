/**
 * Created by naelin on 4/19/17.
 */

import '../client'
import request from 'superagent';

function retrieve(imageIds, callback) {

    request.get('tags/retrieve').query({imageIds: JSON.stringify(imageIds)}).end((err, res) => {
        if(err) {
            console.log(err + res);
        }
        else {
            callback(res.text)
            return;
        }
    })

}

const TagService = {retrieve};
export default TagService;