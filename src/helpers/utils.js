/**
 * Searches over the object of results and checks if 
 * actorsName is the same as the title field, if it is
 * it returns its id
 * @param actorsName (String)
 * @param actorResult (Object)
 **/
var getActorsId = function(actorsName, actorResult) {
    console.log('actorResult', actorResult);
    
    if (actorResult.data && actorResult.data.results && actorResult.data.results.names) {
        var possibleResults = actorResult.data.results.names;
        if (possibleResults.length === 1) {
            return possibleResults[0].id;
        } else if (possibleResults.length > 1) {
            
            var found = false;
            var index = 0;
            while (!found && index < possibleResults.length) {
                if (possibleResults[index].title === actorsName) {
                    found = true;
                } else {
                    index++;
                }
            }
            
            return possibleResults[index].id; 
            
        } else {
            //there were no possible names
            return 0;
        }
    }
}

/**
 * Iterates over both of the arrays to see if there
 * are movies that they both have. Returns an array
 * with those shared movies. 
 * @param movies1 (Array)
 * @param movies2 (Array)
 **/
var findSharedMovies = function(movies1, movies2) {
    
    var sharedMovies = [];
    for (var i1 = 0; i1 < movies1.length; i1++) {
        for (var i2 = 0; i2 < movies2.length; i2++) {
            if (movies1[i1].title === movies2[i2].title &&
               movies1[i1].year === movies2[i2].year) {
                sharedMovies.push(movies1[i1]);
            }
        }    
    }
    
    return sharedMovies;
}

module.exports = {
    'getActorsId': getActorsId,
    'findSharedMovies': findSharedMovies
}