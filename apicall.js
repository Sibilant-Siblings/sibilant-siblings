const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'ETenCKWbaeYw49T7i2wyPA';
const clientSecret = 'zowBbHRr5tk7fDTMmcsSLVamh4B5W5wkpt7eXITTiT0qQXBftJ6AkBlUljPrJQBz';

const searchRequest = {
  term: 'restaurant chinese vegetarian',
  location: '94131',
  radius: 8000,
  price: '1,2,3,4',
  limit: 1
};

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  console.log('access_token: ', response.jsonBody.access_token);
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody.businesses; //this will put all businesses in the location above into allresults
    const prettyJson = JSON.stringify(allResults, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
