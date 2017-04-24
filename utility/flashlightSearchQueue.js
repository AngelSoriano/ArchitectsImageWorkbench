/**
 * Created by scottdligon on 3/31/17.
 */

// This little node script listens at /search/request for incoming searches,
// handles the interactions with ElasticSearch, and pushes results back into /search/response:

var firebase = require ('firebase-admin');
var ElasticClient = require ('elasticsearchclient');
var conf = require('./flashlightConfig');

// initialize our ElasticSearch API
var client = new ElasticClient({ host: 'localhost', port: 9200 });

// Creating a reference to our firebase
// We use firebase as an intermediate to store or requests and responses.
var config = {
  databaseURL: conf.FB_URL,
  credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};

firebase = firebase.initializeApp(config, "queue");
var database = firebase.database();
var queue = database.ref('search');


// Listening on 'search/request' for a new request/child to be added
queue.child('request').on('child_added', processRequest);

// function called when a new request is made
function processRequest(snap) {
    snap.ref.off(); // clear the request after we receive it
    var dat = snap.val();
    // Query ElasticSearch
console.log("LOWERCASE: ",dat.query);
    client.search('firebase', {
        //formatting query to be sent
            "query": {
                'match': {
                    '_id': dat.query
                }
            }})
      .on('data', function(data) {
            // Post the results to https://<INSTANCE>.firebaseio.com/search/response
            queue.child('response/'+snap.key).set(data);
      })
      .on('error', function(error){ /* process errors */ })
      .exec()
    console.log('_id', dat.query)

}

