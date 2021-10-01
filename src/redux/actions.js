import axios from "axios";
import USER from "../constants";

export const requestUsers = (data) => async (dispatch) => {
    // console.log("datadata", data)
  dispatch({
    type: USER.LOAD,
  });
  try {
    dispatch({
      type: USER.LOAD_SUCCESS,
      loginData: data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      loginData: [],
      isError: true,
    });
  }
};




export const getUserList = (data) => async (dispatch) => {
  console.log("datadata DEATLSS", data)
dispatch({
  type: USER.LOAD_USER_DETAIL,
});
try {
  console.log("datadata111", data[0].userData)
  dispatch({
    type: USER.LOAD_USER_DETAIL_SUCCESS,
    userData: data[0].userData,
    isError: false,
  });
} catch (e) {
  dispatch({
    type: USER.LOAD_USER_DETAIL_SUCCESS,
    userData: [],
    isError: true,
  });
}
};