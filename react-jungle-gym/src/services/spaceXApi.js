const apiBase = 'https://api.spacexdata.com/v3';

export const requestLandingPads = () => {
  return fetch(`${apiBase}/landpads`).then(response => response.json());
};

export const requestLaunchPads = () => {
  return fetch(`${apiBase}/launchpads`).then(response => response.json());
};

export const requestNextLaunch = () => {
  return fetch(`${apiBase}/launches/next`).then(response => response.json());
};

export const requestLaunches = () => {
  return fetch(`${apiBase}/launches`).then(response => response.json());
};
