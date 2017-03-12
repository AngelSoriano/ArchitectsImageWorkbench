/**
 * Created by kami on 3/8/17.
 */
var Firebase = require('firebase');
var admin = require("firebase-admin");
var elastic = require('elasticsearch');
console.log("Hello");
// Firebase initialization
// var serviceAccount = require("../service-account-key.json");

var config = {
    firebaseUrl:'https://architects-image-workbench.firebaseio.com',
    elasticSearchUrl: 'http://search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com/'
};
console.log("firebase initialized");

var rootRef = new Firebase(config.firebaseUrl);

//var rootRef = new Firebase(config.firebaseUrl);

var client = new elastic.Client({
    host: config.elasticSearchUrl
});

console.log("elasticsearch configured");

var labelRef = rootRef.child('Images');

//labelRef.on('child_added', upsert);
//labelRef.on('child_changed', upsert);
//labelRef.on('child_removed', remove);

function upsert(snapshot) {
    console.log("Upsert Stuck");
    client.index({
        index: 'firebase',
        type: 'Images',
        id: snapshot.key(),
        body: snapshot.val()
    }, function(err, response){
        if(err){
            console.log("Error indexing user : " + error);
        }
    })
}

function remove(snapshot){
    console.log("remove Stuck");
    client.delete({
        index: 'firebase',
        type: 'Images',
        id: snapshot.key()
    }, function(error, response){
        if(error){
            console.log("Error deleting user : " + error);
        }
    });
}