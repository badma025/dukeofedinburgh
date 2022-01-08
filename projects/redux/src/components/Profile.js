import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  // we access the current value of the user from index.js (the reducer (state.user))
  // and set it to this user object
  // state is the store in index.js
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
