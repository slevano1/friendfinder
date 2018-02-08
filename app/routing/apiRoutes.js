//  ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friends = require("../data/friends.js");
// var waitListData = require("../data/waitinglistData");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);
    //result of user's survey POST and parse 
    var userData = req.body;
    var userScores = userData.scores;  

    console.log(userScores);

    //calc diff between each user
    var totalDifference = 0;

    //loop through all possible match-ups in database
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

    //loop through all the scores of each friend
    for (var j = 0; friends[i].scores[j]; j++) {
    //diff between each friend array
    //run math absolute -> if negative turn positive, if positive stay the same --returns the absolute value of a number
      totalDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
    //
      if (totalDifference <= bestMatch.friendDifference) {
        //reset the bestMatch to be the new friend
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
        }
      }
    }

    //
    friends.push(userData);

    res.json(bestMatch);
  });

}

  