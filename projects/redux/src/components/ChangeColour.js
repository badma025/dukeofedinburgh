import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColour } from "../features/theme";

function ChangeColour() {
  const dispatch = useDispatch();
  const [colour, setColour] = useState();
  return (
    <div>
      <input type="text" onChange={(event) => setColour(event.target.value)} />
      <button onClick={() => dispatch(changeColour(colour))}>
        Change Colour
      </button>
    </div>
  );
}

export default ChangeColour;
