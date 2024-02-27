// Define action types as constants
const GET_ALL_USER_INFO_REQUEST = "user/GET_ALL_USER_INFO_REQUEST";
const GET_ALL_USER_INFO_REQUEST_SUCCESS =
  "user/GET_ALL_USER_INFO_REQUEST_SUCCESS";
const GET_ALL_USER_INFO_REQUEST_FAILURE =
  "user/GET_ALL_USER_INFO_REQUEST_FAILURE";

// Export the action types
export {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
  GET_ALL_USER_INFO_REQUEST_FAILURE,
};

// Define action interfaces or types
interface GetAllUserInfoRequestAction {
  type: typeof GET_ALL_USER_INFO_REQUEST;
}

interface GetAllUserInfoRequestSuccessAction {
  type: typeof GET_ALL_USER_INFO_REQUEST_SUCCESS;
  payload: {
    id: string;
    name: string;
    email: string;
    accessToken: string | null;
  };
}

interface GetAllUserInfoRequestFailureAction {
  type: typeof GET_ALL_USER_INFO_REQUEST_FAILURE;
  error: string; // You can customize the error type based on your needs
}

// Export action interfaces or types
export type UserInfoActionTypes =
  | GetAllUserInfoRequestAction
  | GetAllUserInfoRequestSuccessAction
  | GetAllUserInfoRequestFailureAction;
