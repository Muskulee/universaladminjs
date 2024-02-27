import {takeEvery, put} from 'redux-saga/effects';
import {START_REQUEST, START_REQUEST_SUCCESS} from './actions';

function* handler() {
  yield takeEvery(START_REQUEST, setStart);
}

function* setStart(action) {
  // console.log('STARThh', action);
  try {
    // API call
    yield put({
      type: START_REQUEST_SUCCESS,
      payload: {
        start: true,
      },
    });
  } catch (err) {
    // Handle errorclo
    console.log('err', err);
  }
}

export {handler};
