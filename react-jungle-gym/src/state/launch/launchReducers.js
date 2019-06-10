import { handleActions } from 'redux-actions';
import {
  errorLaunches,
  errorNextLaunch,
  requestingLaunches,
  requestingNextLaunch,
  setLaunches,
  setNextLaunch
} from './launchActions';

const initialState = {
  next: null,
  errorNext: null,
  requestingNext: false,
  all: null,
  errorAll: null,
  requestingAll: false
};

const launches = handleActions(
  {
    [setNextLaunch]: (state, action) => ({
      ...state,
      next: action.payload,
      requestingNext: false
    }),
    [requestingNextLaunch]: (state, _) => ({
      ...state,
      requestingNext: true
    }),
    [errorNextLaunch]: (state, action) => ({
      ...state,
      errorNext: action.payload,
      requestingNext: false
    }),
    [setLaunches]: (state, action) => ({
      ...state,
      all: action.payload,
      requestingAll: false
    }),
    [requestingLaunches]: (state, _) => ({
      ...state,
      requestingAll: true
    }),
    [errorLaunches]: (state, action) => ({
      ...state,
      errorAll: action.payload,
      requestingAll: false
    })
  },
  initialState
);

export default launches;
