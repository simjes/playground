/* eslint-disable */
const igdbService = require('../utils/igdbService');

exports.handler = async function(event, context) {
  const searchValue = event.queryStringParameters.value;

  try {
    const searchResponse = await igdbService.searchGames(searchValue);
    if (!searchResponse.ok) {
      return {
        statusCode: searchResponse.status,
        body: searchResponse.statusText,
      };
    }

    const searchResults = await searchResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(searchResults),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
