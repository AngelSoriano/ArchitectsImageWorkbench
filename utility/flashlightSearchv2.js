var elasticsearch = require('elasticsearch');
var client = elasticsearch.Client({
    host: 'search-architect-images-6uxxalaigajwi7jnixorioabfa.us-west-1.es.amazonaws.com',
    log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: Infinity,

    // undocumented params are appended to the query string
    hello: "elasticsearch!"
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
        getmeres(client);

    }
});

function getmeres(client)
{
    client.search({
        index: 'firebase',
        body: {
            query: {
                terms:{
                    _id:"Apartment"
                }
            }

        }
    }, function (error, response) {
        if (error) {
            console.trace('Search query failed');
        } else {
            console.log('All is well');
            d=response;//console.log(response);
            showdocs(d)
        }
    });
}

function showdocs(d){
    console.log(d["hits"]);}