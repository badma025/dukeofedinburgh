import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();

  const handle = (number) => {
    if ((number = 5)) {
      navigate("/home");
    } else {
      navigate("/fdkgj");
    }
  };
  return (
    <div>
      THIS IS THE PAGE FOR {username}
      <button
        onClick={() => {
          handle(6);
        }}
      >
        Change to about Page
      </button>
    </div>
  );
}

export default Profile;
