/* eslint-disable */
const mapReleasesToGames = require('../utils/mapReleasesToGames');
const igdbService = require('../utils/igdbService');

exports.handler = async function(event, context) {
  try {
    const releaseResponse = await igdbService.getUpcomingReleases();
    if (!releaseResponse.ok) {
      return {
        statusCode: releaseResponse.status,
        body: releaseResponse.statusText,
      };
    }

    const releaseDates = await releaseResponse.json();
    // Limit to 10 games, due to free tier restrictions on 3.party API
    const games = mapReleasesToGames(releaseDates).slice(0, 10);

    const gameIds = games.map(game => game.id);
    const gamesResponse = await igdbService.getGamesByIds(gameIds);
    if (!gamesResponse.ok) {
      return {
        statusCode: gamesResponse.status,
        body: gamesResponse.statusText,
      };
    }

    const additionalGameData = await gamesResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify(
        games.map(game => ({
          ...game,
          name: additionalGameData.find(data => data.id === game.id).name,
        })),
      ),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
