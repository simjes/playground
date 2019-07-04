const mapReleasesToGames = releases => {
  const games = {};

  releases.forEach(release => {
    games[release.game] = {
      id: release.game,
      releaseDate: release.date,
      platforms: [],
    };
  });

  releases.forEach(release => {
    games[release.game].platforms = [
      ...games[release.game].platforms,
      release.platform,
    ];
  });

  return Object.values(games).sort((a, b) => a.releaseDate - b.releaseDate);
};

module.exports = mapReleasesToGames;
