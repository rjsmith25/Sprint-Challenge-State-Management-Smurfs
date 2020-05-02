import { smurfsAction } from "../actions";

const {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
} = smurfsAction;

const initialState = {
  smurfs: [],
  isloading: false,
  error: null
};

function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case ADD_SMURFS_START:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case DELETE_SMURFS_START:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isloading: false,
        error: null
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isloading: false,
        error: null
      };
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isloading: false,
        error: null
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload
      };
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload
      };
    case DELETE_SMURFS_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default smurfsReducer;
