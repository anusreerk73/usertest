import USER from "../constants";

const initalState = {
    loginData: [],
    userData:[],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        loginData: action.loginData,
        isLoading: false,
      };
      case USER.LOAD_USER_DETAIL:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case USER.LOAD_USER_DETAIL_SUCCESS:
        return {
          ...state,
          userData: action.userData,
          isLoading: false,
        };
    default:
      return state;
  }
};

export default reducer;