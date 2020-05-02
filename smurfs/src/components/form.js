import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { smurfsAction } from "../actions";
const { postSmurfs } = smurfsAction;

function Form() {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
  const dispatch = useDispatch();

  function handleChange(e) {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!smurf.name && !smurf.age && !smurf.height) {
      return;
    }
    dispatch(
      postSmurfs({ name: smurf.name, age: smurf.age, height: smurf.height })
    );
  }

  return (
    <form onSubmit={handleSubmit} className="smurfForm" action="">
      <input
        value={smurf.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter name"
      />
      <input
        value={smurf.age}
        onChange={handleChange}
        type="text"
        name="age"
        placeholder="Enter age"
      />
      <input
        value={smurf.height}
        onChange={handleChange}
        type="text"
        name="height"
        placeholder="Enter height"
      />
      <button className="smurfSubmitbtn" type="submit">
        Create New Smurf
      </button>
    </form>
  );
}

export default Form;
