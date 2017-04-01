/**
 * Created by scottdligon on 3/31/17.
 */

// This little node script listens at /search/request for incoming searches,
// handles the interactions with ElasticSearch, and pushes results back into /search/response:

var firebase = require ('firebase-admin');
var ElasticClient = require ('elasticsearchclient');//check with Angel
conf = require('./flashlightConfig');


// initialize our ElasticSearch API
var client = new ElasticClient({ host: 'search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com', port: 80 });

// listen for requests at https://<INSTANCE>.firebaseio.com/search/request
var config = {
  databaseURL: conf.FB_URL,
  credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};
firebase = firebase.initializeApp(config, "queue");
var database = firebase.database();
var queue = database.ref('architects-image-workbench');
//var queue = new Firebase('https://architects-image-workbench.firebaseio.com/search');
queue.child('request').on('child_added', processRequest);

function processRequest(snap) {
    snap.ref.off(); // clear the request after we receive it
    var dat = snap.val();
    // Query ElasticSearch

    client.search(dat.index, dat.type, {
        //formatting query to be sent
            "query": {
                'match': {
                    '_id': dat.query }
            }})
      .on('data', function(data) {
            // Post the results to https://<INSTANCE>.firebaseio.com/search/response
            queue.child('response/'+snap.key).set(data);
      })
      .on('error', function(error){ /* process errors */ })
      .exec()
}

