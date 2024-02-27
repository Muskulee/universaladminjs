import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./_lib/redux/models/rootReducer";

// import rootSaga from './sagas';
import rootSaga from "./_lib/redux/models/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
