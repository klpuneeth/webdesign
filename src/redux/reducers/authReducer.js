import { UPDATE_AUTH, UPDATE_LOGIN_DATA } from "../constants/constants";

const initialState = {
  loginData: { employeeName: "", employeeId: "", emailId: "", password: "" },
  isAuth: localStorage.getItem("LoginToken") || "false",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_DATA:
      return {
        ...state,
        loginData: action.payload,
      };
    case UPDATE_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;
