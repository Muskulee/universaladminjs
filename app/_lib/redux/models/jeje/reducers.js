import {LOADED, JEJE_REQUEST_SUCCESS} from './actions';

const initialState = {
  jeje: false,
};

const reducer = (state = initialState, action) => {
  // console.log('reducer.action.type', action.type);
  // console.log('reducer.action.payload', action.payload);

  switch (action.type) {
    case JEJE_REQUEST_SUCCESS: {
      const {jeje} = action.payload;
      return {jeje};
      //   return {
      //     ...state,
      //     loaded: true,
      //     // start: true,
      //   };
    }
    default:
      return state;
  }
};

export {reducer};
