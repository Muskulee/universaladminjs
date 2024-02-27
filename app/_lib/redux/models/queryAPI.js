import { call, select } from "redux-saga/effects";
import { apiURL } from "./../../../_lib/api/config/urls";

function* queryAPI({ endPoint, method, body, apiToken, headers }) {
  const state = yield select();

  const res = yield call(() =>
    makeRequest({ endPoint, method, headers, body, apiToken })
  );

  if (res.status === 401) {
    // logUser Out, notify that they must login
    // console.log('res', res.status);
  }

  const parsedResponse = yield call(() => parseResponse(res));

  if (!res.ok) {
    console.log("first", "not ok first");
  }

  return parsedResponse;
}

const makeRequest = async ({
  endPoint,
  method,
  headers,
  body = null,
  apiToken,
}) => {
  return fetch(apiURL + endPoint, {
    method,
    headers: {
      Authorization: apiToken ? `Bearer ${apiToken}` : undefined,
      "Content-Type": "application/json",
      ...headers,
    },
    body: body === "{}" ? undefined : JSON.stringify(body),
  });
};

const parseResponse = async (response) => {
  let parsedResponse;
  try {
    parsedResponse = await response.clone().json();
  } catch {
    parsedResponse = await response.text();
  }

  return parsedResponse;
};

export { queryAPI };
