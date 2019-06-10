import { call, put, takeLatest } from 'redux-saga/effects';
import {
  requestLandingPads,
  requestLaunchPads
} from '../../services/spaceXApi';
import {
  mapLandingPadsToLocations,
  mapLaunchPadsToLocations
} from '../../utils/locationUtils';
import {
  errorLandingPads,
  errorLaunchPads,
  getLandingPads,
  getLaunchPads,
  requestingLandingPads,
  requestingLaunchPads,
  setLandingPads,
  setLaunchPads
} from './locationActions';

export function* watchGetLaunchPads() {
  yield takeLatest(getLaunchPads, fetchLaunchPads);
}

export function* watchGetLandingPads() {
  yield takeLatest(getLandingPads, fetchLandingPads);
}

export function* fetchLandingPads() {
  try {
    yield put(requestingLandingPads());

    const landingPads = yield call(requestLandingPads);
    const locations = mapLandingPadsToLocations(landingPads);

    yield put(setLandingPads(locations));
  } catch (error) {
    yield put(errorLandingPads(error));
  }
}
export function* fetchLaunchPads() {
  try {
    yield put(requestingLaunchPads());

    const launchPads = yield call(requestLaunchPads);
    const locations = mapLaunchPadsToLocations(launchPads);

    yield put(setLaunchPads(locations));
  } catch (error) {
    yield put(errorLaunchPads(error));
  }
}
