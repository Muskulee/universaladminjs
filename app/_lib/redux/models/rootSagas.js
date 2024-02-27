import { all } from "redux-saga/effects";
import { handler as userSaga } from "./user/sagas";
import { handler as startSaga } from "./start/sagas";
import { handler as jejeSaga } from "./jeje/sagas";

export default function* rootSaga() {
  yield all([userSaga(), startSaga(), jejeSaga()]);
}
