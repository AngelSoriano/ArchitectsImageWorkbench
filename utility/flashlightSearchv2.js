var elasticsearch = require('elasticsearch');

var connectionString = 'search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com';

var client = new elasticsearch.Client({
    host: connectionString
});

client.search({
    index: 'firebase',
    type: 'document',
    body: {
        query: {
            terms:{
                _id:"Apartment"
            }
        }
    }
}).then(function (resp) {
    console.log("SUCCESS:::",resp);
}, function (err) {
    console.log(err.message);
});