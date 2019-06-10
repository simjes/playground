import { call, put, takeLatest } from 'redux-saga/effects';
import { requestLaunches, requestNextLaunch } from '../../services/spaceXApi';
import {
  errorLaunches,
  errorNextLaunch,
  getLaunches,
  getNextLaunch,
  requestingLaunches,
  requestingNextLaunch,
  setLaunches,
  setNextLaunch
} from './launchActions';

export function* watchGetNextLaunch() {
  yield takeLatest(getNextLaunch, fetchNextLaunch);
}

export function* fetchNextLaunch() {
  try {
    yield put(requestingNextLaunch());

    const nextLaunch = yield call(requestNextLaunch);
    yield put(setNextLaunch(nextLaunch));
  } catch (error) {
    yield put(errorNextLaunch(error));
  }
}

export function* watchGetLaunches() {
  yield takeLatest(getLaunches, fetchLaunches);
}

export function* fetchLaunches() {
  try {
    yield put(requestingLaunches());

    const launches = yield call(requestLaunches);
    const sortedLaunches = launches.sort(
      (a, b) => b.launch_year - a.launch_year
    );

    yield put(setLaunches(sortedLaunches));
  } catch (error) {
    yield put(errorLaunches(error));
  }
}
