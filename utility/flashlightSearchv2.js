var admin = require('firebase-admin');
var elasticsearch = require('elasticsearch');

var connectionString = 'search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com';

// initialize ElasticSearch API
var client = new elasticsearch.Client({
    host: connectionString,
    port: 80,
    search: function(index, type, searchTerm, callback){
        var reqRef = queue.child('request').push({index: index, type: type, query: searchTerm});

        queue.child('response/'+reqRef.key()).on('value', function fn(snap){
          if( snap.val() !== null ) {     // wait for data
            snap.ref().off('value', fn); // stop listening
            snap.ref().remove();         // clear the queue
            callback(snap.val());
          }
        })
}
});
console.log("client initialized");

// listen for requests
var db = admin.database();
var queue = db.ref('architects-image-workbench/Labels');

queue.child('request').on('child_added', processRequest);

function processRequest(snap){
    // first clear request after it's been received
    snap.ref().remove();
    var data = snap.val();
    // query elastic search
    client.search(dat.index, dat.type, { "query": {'query_string' : { query: dat.query}}})
      .on('data', function(data){
          //posting results to firebaseio.com/search/response
        queue.child('response/'+snap.key()).set(results);
      })
      .on('error', function(error){console.log("Error in processRequest")})
    .exec();
}

console.log("starting search");
client.search('firebase', 'labels', function(data) {
  console.log('got back '+data.total+' hits');
  if( data.hits ) {
    data.hits.forEach(function(hit) {
      console.log(hit);
    });
  }
});
console.log("finished search");