/**
 * Created by kami on 3/8/17.
 */
var Firebase = require('firebase');
var elastic = require('elasticsearch');

// Firebase initialization
firebase.intializeApp({
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
});

var config = {
    firebaseUrl:'https://architects-image-workbench.firebaseio.com',
    elasticSearchUrl: 'http://search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com/'
};

var rootRef = new Firebase(config.firebaseUrl);

var client = new elastic.Client({
    host: config.elasticSearchUrl
});

var labelRef = rootRef.child('Labels');

labelRef.on('child_added', upsert);
labelRef.on('child_changed', upsert);
labelRef.on('child_removed', remove);

function upsert(snapshot) {
    client.index({
        index: 'firebase',
        type: 'Labels',
        id: snapshot.key(),
        body: snapshot.val()
    }, function(err, response){
        if(err){
            console.log("Error indexing user : " + error);
        }
    })
}

function remove(snapshot){
    client.delete({
        index: 'firebase',
        type: 'Labels',
        id: snapshot.key()
    }, function(error, response){
        if(error){
            console.log("Error deleting user : " + error);
        }
    });
}

