import {START_REQUEST_SUCCESS} from './actions';

const initialState = {
  start: false,
};

const reducer = (state = initialState, action) => {
  // console.log('action.type', action.type);

  switch (action.type) {
    case START_REQUEST_SUCCESS: {
      const {start} = action.payload;
      return {start};
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
