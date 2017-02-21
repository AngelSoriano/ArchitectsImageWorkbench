var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Upload images endpoint')
    //
    // const param = req.query.q;
    // console.log(param)
    // if (!param) {
    //     res.json({
    //         error: 'Missing required parameter `q`',
    //     });
    //     return;
    // }
    //
    // var file = param // use the Blob or File API
    // storageRef.put(file).then(function(snapshot) {
    //     console.log('Uploaded a blob or file!');
    // });


});

module.exports = router;
