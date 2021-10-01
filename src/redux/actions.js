import axios from "axios";
import USER from "../constants";
import api from '../api';


export const requestUsers = (data) => async (dispatch) => {
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



export const getUserList = () => async dispatch => {
    const response = await api.get('0.8/?results=20')

    console.log(response.data , "response.data111")

    dispatch({
        type: USER.LOAD_USER_DETAIL,
      });
      try {
        dispatch({
          type: USER.LOAD_USER_DETAIL_SUCCESS,
          userData: response.data,
          isError: false,
        });
      } catch (e) {
        dispatch({
          type: USER.LOAD_USER_DETAIL_SUCCESS,
          userData: [],
          isError: true,
        });
      }
}
   