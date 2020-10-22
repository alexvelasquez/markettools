// import axios from "axios";

import {
    PRUEBA_API,
    ALL_CLIENT,
    GET_ALL_TOOLS,
    INSERT_TOOLS,
    GET_ALL_CATEGORY
    //INSERT_CATEGORY

} from "../actions/index";

const initialState = {
  info_movie: [],
  all_client: [],
  all_tools: [],
  all_categorys: []

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
      case GET_ALL_CATEGORY:
      return {
        ...state,
        all_categorys: action.payload,
      };
      case INSERT_TOOLS:         
      return {
        ...state, 
        all_tools:  [...state.all_tools, action.payload] //Usar esto para actualizar el estado      
      };
    default:
      return state;
  }
}; 

export default reducer;