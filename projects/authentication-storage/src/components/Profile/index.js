import React, { useEffect, useState } from "react";
import { useAuth, upload } from "../../firebase";
import "../../index.css";

function Profile() {
  const user = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg"
  );

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    upload(photo, user, setLoading);
  };

  // we set the photoURL
  useEffect(() => {
    if (user?.photoURL) {
      console.log(user);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  return (
    <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>
        Upload
      </button>
      <img src={photoURL} alt="avatar" className="avatar" />
    </div>
  );
}

export default Profile;
