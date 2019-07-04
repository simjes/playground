/* eslint-disable */
const fetch = require('node-fetch');
const mapReleasesToGames = require('./utils/mapReleasesToGames');

const baseUrl = process.env.IGDB_URL;
const fetchConfig = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'user-key': process.env.IGDB_KEY,
    'Content-Type': 'text/plain',
  },
};

exports.handler = async function(event, context) {
  const now = Math.floor(Date.now() / 1000);
  const limit = 50;
  const offset = 0;

  try {
    const releaseResponse = await fetch(`${baseUrl}/release_dates`, {
      ...fetchConfig,
      body: `
        fields date, game, platform;
        where date > ${now} & platform = (48, 49, 130, 6);
        sort date asc;
        limit ${limit};
        offset ${offset};
      `,
    });
    if (!releaseResponse.ok) {
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: releaseResponse.status,
        body: releaseResponse.statusText,
      };
    }
    const releaseDates = await releaseResponse.json();

    // Limit to 10 games, due to free tier restrictions on 3.party API
    const games = mapReleasesToGames(releaseDates).slice(0, 10);

    const gameIds = games.map(game => game.id);
    const gamesResponse = await fetch(`${baseUrl}/games`, {
      ...fetchConfig,
      body: `
        fields id, name;
        where id = (${gameIds});
      `,
    });
    if (!gamesResponse.ok) {
      // NOT res.status >= 200 && res.status < 300
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
