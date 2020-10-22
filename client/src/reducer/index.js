// import axios from "axios";

import {
    PRUEBA_API,
    ALL_CLIENT,
    GET_ALL_TOOLS,
    LOGIN
    //INSERT_CATEGORY
} from "../actions/index";

const initialState = {
  info_movie: [],
  all_client: [],
  all_tools: [],
  users: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA_API:
      return {
        ...state,
        info_movie: action.payload,
      };
      case ALL_CLIENT:
      return {
        ...state,
        all_client: action.payload,
      };
      case GET_ALL_TOOLS:
      return {
        ...state,
        all_tools: action.payload,
      };
      case LOGIN:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}; 

export default reducer;