import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  // we access the current value of the user
  // and set it to this user object
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
