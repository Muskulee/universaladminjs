import {takeEvery, put} from 'redux-saga/effects';
import {JEJE_REQUEST, JEJE_REQUEST_SUCCESS} from './actions';

function* handler() {
  yield takeEvery(JEJE_REQUEST, setJeje);
}

function* setJeje(action) {
  // console.log('jeje actionaction', action);
  // console.log('jeje payload', action.payload);

  //test in
  try {
    // API call
    yield put({
      type: JEJE_REQUEST_SUCCESS,
      payload: {
        jeje: action.payload,
      },

      // payload: action.payload,
    });
  } catch (err) {
    // Handle errorclo
    console.log('err', err);
  }
}

export {handler};
