export const filterSuccessfulLaunches = launches => {
  return launches.filter(launch => launch.launch_success);
};

export const filterFailedLaunches = launches => {
  return launches.filter(launch => !launch.launch_success);
};

export const filterLaunchesWithLandingIntent = launches => {
  return launches.filter(
    launch => launch.rocket.first_stage.cores[0].landing_intent
  );
};

export const filterLaunchesWithoutLandingIntent = launches => {
  return launches.filter(
    launch => !launch.rocket.first_stage.cores[0].landing_intent
  );
};
