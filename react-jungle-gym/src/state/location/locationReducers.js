import { handleActions } from 'redux-actions';
import {
  errorLandingPads,
  requestingLandingPads,
  setLandingPads,
  setLaunchPads,
  requestingLaunchPads,
  errorLaunchPads
} from './locationActions';

const initialState = {
  landingPads: null,
  requestingLandingPads: false,
  errorLandingPads: null,
  launchPads: null,
  requestingLaunchPads: false,
  errorLaunchPads: null
};

const locations = handleActions(
  {
    [setLandingPads]: (state, action) => ({
      ...state,
      landingPads: action.payload,
      requestingLandingPads: false
    }),
    [requestingLandingPads]: (state, _) => ({
      ...state,
      requestingLandingPads: true
    }),
    [errorLandingPads]: (state, action) => ({
      ...state,
      errorLandingPads: action.payload,
      requestingLandingPads: false
    }),
    [setLaunchPads]: (state, action) => ({
      ...state,
      launchPads: action.payload,
      requestingLaunchPads: false
    }),
    [requestingLaunchPads]: (state, _) => ({
      ...state,
      requestingLaunchPads: true
    }),
    [errorLaunchPads]: (state, action) => ({
      ...state,
      requestingLaunchPads: false,
      errorLaunchPads: action.payload
    })
  },
  initialState
);

export default locations;
