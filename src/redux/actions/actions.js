//Authentication

import { UPDATE_AUTH, UPDATE_LOGIN_DATA } from "../constants/constants";

export const updateLoginData = (data) => {
  return {
    type: UPDATE_LOGIN_DATA,
    payload: data,
  };
};

export const updateAuth = (isAuth) => {
  return {
    type: UPDATE_AUTH,
    payload: isAuth,
  };
};
