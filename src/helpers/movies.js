import Utils from './utils';


var API_ENDPOINT = 'http://imdb.wemakesites.net/api/';
var API_KEY = '&api_key=78d365f1-f2fd-4ae2-85b8-1435f366a2f2';
var SEARCH_STRING = 'search?q=';

var getMovies = function(actor1, actor2) {
    
    var actor1Movies = {};
    var actor2Movies = {};
    
    var promise = new Promise(function(resolve, reject) {
        if (actor1 && actor2) {
        
            //get first actor
            getActorMovies(actor1)
            .then(function(movies) {
                actor1Movies = movies;
                console.log('movies1', movies);
                //get second actor
                return getActorMovies(actor2);
            }).then(function(movies) {
                actor2Movies = movies;
                console.log('movies2', movies);

                return Utils.findSharedMovies(actor1Movies, actor2Movies);
            }).then(function(sharedMovies) {
                //resolve
                resolve(sharedMovies);            
            }).catch(function(err){
                //reject
                reject(err);
            });
        } else {
            //test this without validation in component
            reject('One or both of the actors is blank');
        }
    });
}

/**
 * Gets all the movies an actor has worked on
 * @param actorName (String)
 **/
function getActorMovies(actorName) {
    var promise = new Promise(function(resolve, reject){
        
        var searchActor = API_ENDPOINT + SEARCH_STRING + actorName + API_KEY;
        console.log(searchActor);
        fetch(searchActor, {
            method: 'get',
            mode: 'cors'
        }).then(function(result) {
            var actorId = Utils.getActorsId(actorName, result);
            
            var endpointWithId = API_ENDPOINT + actorId + API_KEY;
            
            return fetch(endpointWithId, {
                method: 'get',
                mode: 'cors'
            });
        }).then(function(result) {
            resolve(result.data.filmography);
        }).catch(function(err) {
            reject(err);
        });
    });    
}

module.exports = {
    'getMovies': getMovies
}