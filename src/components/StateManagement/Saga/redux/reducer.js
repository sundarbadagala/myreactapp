import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  error:'',
  isLoading:false

};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
        return{
            ...state,
            isLoading: true
        }
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
        isLoading: false
      };
    case actionTypes.FETCH_PRODUCTS_FAIL:
        return{
            ...state,
            data: [],
            error: action.payload,
            isLoading: false
        }
    default:
      return state;
  }
};

export default usersReducer
