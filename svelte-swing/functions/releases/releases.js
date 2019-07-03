/* eslint-disable */
const fetch = require('node-fetch');
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
  const limit = 10;
  const offset = 0;

  try {
    const releaseResponse = await fetch(`${baseUrl}/release_dates`, {
      ...fetchConfig,
      body: `
        fields *;
        where date > ${now};
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

    const gameIds = releaseDates.map(r => r.game);
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

    const gameData = await gamesResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify(
        releaseDates.map(r => ({
          id: r.game,
          date: r.date,
          name: gameData.find(g => g.id === r.game).name,
          platform: r.platform,
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
