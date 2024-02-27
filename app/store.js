import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./_lib/redux/models/rootReducer";

// import rootSaga from './sagas';
import rootSaga from "./_lib/redux/models/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
