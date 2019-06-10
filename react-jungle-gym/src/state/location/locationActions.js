import { createAction } from 'redux-actions';

const GET_LANDING_PADS = 'LOCATION/GET_LANDING_PADS';
const SET_LANDING_PADS = 'LOCATION/SET_LANDING_PADS';
const ERROR_LANDING_PADS = 'LOCATION/ERROR_LANDING_PADS';
const REQUESTING_LANDING_PADS = 'LOCATION/REQUESTING_LANDING_PADS';

export const getLandingPads = createAction(GET_LANDING_PADS);
export const setLandingPads = createAction(SET_LANDING_PADS);
export const errorLandingPads = createAction(ERROR_LANDING_PADS);
export const requestingLandingPads = createAction(REQUESTING_LANDING_PADS);

const GET_LAUNCH_PADS = 'LOCATION/GET_LAUNCH_PADS';
const SET_LAUNCH_PADS = 'LOCATION/SET_LAUNCH_PADS';
const ERROR_LAUNCH_PADS = 'LOCATION/ERROR_LAUNCH_PADS';
const REQUESTING_LAUNCH_PADS = 'LOCATION/REQUESTING_LAUNCH_PADS';

export const getLaunchPads = createAction(GET_LAUNCH_PADS);
export const setLaunchPads = createAction(SET_LAUNCH_PADS);
export const errorLaunchPads = createAction(ERROR_LAUNCH_PADS);
export const requestingLaunchPads = createAction(REQUESTING_LAUNCH_PADS);
