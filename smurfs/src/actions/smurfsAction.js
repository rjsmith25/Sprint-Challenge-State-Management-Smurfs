import axios from "axios";
const FETCH_SMURFS_START = "FETCH_SMURFS_START";
const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

const ADD_SMURFS_START = "ADD_SMURFS_START";
const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

const DELETE_SMURFS_START = "DELETE_SMURFS_START";
const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";

function getSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(res => {
        dispatch({
          type: FETCH_SMURFS_FAILURE,
          payload: "Unable to get smurfs data"
        });
      });
  };
}

function postSmurfs({ name, age, height }) {
  return dispatch => {
    dispatch({ type: ADD_SMURFS_START });
    axios
      .post("http://localhost:3333/smurfs", {
        name,
        age,
        height
      })
      .then(res => {
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(res => {
        dispatch({
          type: ADD_SMURFS_FAILURE,
          payload: "Unable to add smurfs data"
        });
      });
  };
}

function deleteSmurf(id) {
  return dispatch => {
    dispatch({ type: DELETE_SMURFS_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(res => {
        dispatch({
          type: DELETE_SMURFS_FAILURE,
          payload: "Unable to remove smurf"
        });
      });
  };
}

export {
  getSmurfs,
  postSmurfs,
  deleteSmurf,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
};
