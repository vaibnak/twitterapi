
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

//setting up search parameters

var params={
  q: '#nodejs',
  count: 2,
  result_type: 'recent',
  lang:'en'
}

T.get('search/tweets', params, function(err, data, response){
  if(!err)
     for (var i = 0; i < data.statuses.length; i++) {
        let id = {id: data.statuses[i].id_str }

        T.post('favourities/create', id, function(err, response){
          if(err)
            console.log(err[0].message);
          else {
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('favorited', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
     }
   else {
     console.log(err);
   }
})
