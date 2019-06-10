export const mapLandingPadsToLocations = landingPads => {
  return landingPads.map(pad => mapLandingPadToLocation(pad));
};

export const mapLaunchPadsToLocations = launchPads => {
  return launchPads.map(pad => mapLaunchPadToLocation(pad));
};

export const mapLandingPadToLocation = landingPad => {
  return {
    id: landingPad.id,
    fullName: landingPad.full_name,
    status: landingPad.status,
    numberOfSuccesses: landingPad.successful_landings,
    numberOfAttempts: landingPad.attempted_landings
  };
};

export const mapLaunchPadToLocation = launchPad => {
  return {
    id: launchPad.id,
    fullName: launchPad.site_name_long,
    status: launchPad.status,
    numberOfSuccesses: launchPad.successful_launches,
    numberOfAttempts: launchPad.attempted_launches
  };
};
