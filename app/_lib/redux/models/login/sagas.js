import {takeEvery, put, call} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS} from './actions';
import {queryAPI} from '../queryAPI';

function* handler() {
  yield takeEvery(LOGIN_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    const data = yield call(queryAPI, {
      endPoint: '/user/login',
      method: 'POST',
      body: action.payload,
    });

    yield put({
      type: LOGIN_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    // Handle error
    console.log('erroooo', err.message);
  }
}

export {handler};
