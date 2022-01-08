import { auth, db, storage } from "../../../utils/firebase";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRef, useState } from "react";
import {
  serverTimestamp,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) alert("Empty input. Try again.");

    const collectionRef = collection(db, "posts");
    const payload = {
      message: inputRef.current.value,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      timestamp: serverTimestamp(),
    };

    // we get a document back from this which we can manipulate
    await addDoc(collectionRef, payload).then((document) => {
      if (imageToPost) {
        // funky upload stuff
        // the document id of the database object
        // URL of what we want to upload
        const storageRef = ref(storage, `posts/${document.id}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          imageToPost,
          "data_url"
        );

        uploadTask.on(
          "state_changed",
          (hello) => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              const docRef = doc(db, "posts", document.id);
              // update the database with the post image we have
              const payload = {
                postImage: url,
              };
              updateDoc(docRef, payload);
            });
          },
          (error) => {
            // Handle unsuccessful uploads
            throw error;
          }
        );
      }
    });

    inputRef.current.value = "";
    setImageToPost(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    // if we selected a file (we target the first file)
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const [user] = useAuthState(auth);
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 fomt-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={user?.photoURL}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
          alt=""
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
            name=""
            id=""
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 hover:text-red-800  text-center">
              Remove
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            type="file"
            onChange={addImageToPost}
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">FeelingActivity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
