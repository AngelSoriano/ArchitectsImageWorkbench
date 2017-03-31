/**
 * Created by scottdligon on 3/31/17.
 */

// This little node script listens at /search/request for incoming searches,
// handles the interactions with ElasticSearch, and pushes results back into /search/response:
var Firebase = require ('firebase');
var ElasticClient = require ('elasticsearchclient');//check with Angel

// initialize our ElasticSearch API
var client = new ElasticClient({ host: 'search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com', port: 80 });

// listen for requests at https://<INSTANCE>.firebaseio.com/search/request
var queue = new Firebase('https://architects-image-workbench.firebaseio.com/search');
queue.child('request').on('child_added', processRequest);

function processRequest(snap) {
    snap.ref().remove(); // clear the request after we receive it
    var data = snap.val();
    // Query ElasticSearch
    client.search(dat.index, dat.type, { "query": { 'match': { _id: dat.query } })
        .on('data', function(data) {
            // Post the results to https://<INSTANCE>.firebaseio.com/search/response
            queue.child('response/'+snap.key()).set(results);
        })
        .on('error', function(error){ /* process errors */ });
.exec();
}