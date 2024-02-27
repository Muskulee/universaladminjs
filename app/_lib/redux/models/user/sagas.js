import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';
import {queryAPI} from '../queryAPI';

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    const posts = yield call(queryAPI, {
      endPoint: '',
      method: 'GET',
      // body: {},
    });
    // .... Whateverr you want to pass to body incase it is apost
    // console.log('posts', posts);
    // console.log('put2', 'put');

    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: 'id12',
        name: 'Michael',
        email: 'anothertestemail@test.com',
      },
    });
  } catch (err) {
    // Handle error
    console.log('erroooo', err.message);
  }
}

export {handler};
