import axios from "axios";
import {
    PRUEBA_API,
    ALL_CLIENT
   
} from "../actions/index";

const initialState = {
  info_movie: [],
  all_client: []

  
   
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
        info_movie: action.payload,
      };
    

    default:
      return state;
  }
};////

 

export default reducer;