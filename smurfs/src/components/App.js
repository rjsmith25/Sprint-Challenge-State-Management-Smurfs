import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { smurfsAction } from "../actions";
import Form from "./form";
import Smurfs from "./smurfs";
const { getSmurfs } = smurfsAction;

function App() {
  const { smurfs, isloading, error } = useSelector(state => {
    const { smurfs, isloading, error } = state.smurfs;
    return {
      smurfs,
      isloading,
      error
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <p className="smurfsError">{error}</p>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        {isloading ? (
          <p className="loading">Loading Data...</p>
        ) : (
          <Smurfs smurfs={smurfs} />
        )}
      </div>
    </div>
  );
}

export default App;
