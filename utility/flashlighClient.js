/**
 * Created by kami on 3/31/17.
 */
var firebase = require('firebase-admin');
var conf = require('./flashlightConfig');


// path to search
var PATH = "https://architects-image-workbench.firebaseio.com/search";

// Creating reference to our database
var config = {
  databaseURL: conf.FB_URL ,
  credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};
firebase = firebase.initializeApp(config, "client");
var database = firebase.database();
var queue = database.ref('search');



// This function pushes a search request into firebase so it can be executed by elastic search
// It will post the response in 'search/response'
function search(index, type, searchTerm, callback = defaultCallback){
  // post to firebase/search/request
  // index is 'firebase', type is 'label' or 'image', and query is the search term
  var reqRef = queue.child('request').push({index: index, type: type, query: searchTerm});

  // wait for result by listening to 'search/response'
  queue.child('response/'+reqRef.key).on('value', function fn(snap){
    console.log("got a response");
    //SNAP is the json format of results being returned
    console.log(snap);
    if(snap.val() !== null){        // wait for data
      console.log("snap has a value");
      snap.ref.off('value', fn);  // stop listenning
      snap.ref.remove();          // clear queue
      callback(snap.val());

    }
  });

}

// default callback function
function defaultCallback(data) {
  console.log("in callback");
  console.log('got back ' +data.total+ ' hits');
  if(data.hits) {
    data.hits.forEach(function(hit){
      console.log(hit);
    });
  }
}


// Query that is being read: Note it is a fixed value "Restaurant"
function dotest() {
  query = "Restaurant";
  console.log("in Do test:", query);
  search('firebase', 'label', query, defaultCallback);
  console.log("dont with do test");
}

module.exports = {
  search: search,
  test: dotest
};