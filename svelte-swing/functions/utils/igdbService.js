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

const igdbClient = (endpoint, body) => {
  return fetch(baseUrl + endpoint, {
    ...fetchConfig,
    body,
  });
};

const getUpcomingReleases = () => {
  const now = Math.floor(Date.now() / 1000);

  return igdbClient(
    '/release_dates',
    `
      fields date, game, platform;
      where date > ${now} & platform = (48, 49, 130, 6);
      sort date asc;
      limit 50;
    `,
  );
};

const getGamesByIds = gameIds => {
  return igdbClient(
    '/games',
    `
      fields *;
      where id = (${gameIds});
    `,
  );
};

const searchGames = search => {
  return igdbClient(
    '/games',
    `
      fields *;
      search "${search}";
    `,
  );
};

module.exports = { getUpcomingReleases, getGamesByIds, searchGames };
