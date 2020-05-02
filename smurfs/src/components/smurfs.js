import React from "react";
import { useDispatch } from "react-redux";
import { smurfsAction } from "../actions";
const { deleteSmurf } = smurfsAction;

function Smurfs({ smurfs }) {
  const dispatch = useDispatch();

  return (
    <div className="smurfs">
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id} className="smurf">
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <p
              onClick={() => {
                dispatch(deleteSmurf(smurf.id));
              }}
              className="deleteSmurf"
            >
              X
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Smurfs;
