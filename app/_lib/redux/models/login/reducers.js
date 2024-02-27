import {LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS} from './actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  username: null,
  phone: null,
  accessToken: null,
  loading: true,
  error: null,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS: {
      const {
        token_type,
        expires_at,
        accessToken,
        message,
        username,
        phone,
        error,
      } = action.payload;

      return {
        error,
        token_type,
        expires_at,
        accessToken,
        username,
        message,
        phone,
        loading: false,
      };
    }
    case LOGIN_REQUEST_FAILURE: {
      return initialState;
    }
    default:
      return state;
  }
};

export {reducer};
