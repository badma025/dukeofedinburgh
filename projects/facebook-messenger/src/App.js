import { FormControl, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./firebase/firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // you can have as many useEffects as you want (they run as conditions)
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    // run once when the app component loads
    // this says "ANY changes I see, I'm running this piece of code!"
    // all documents are put into the variable snapshot
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      // sets the messages to map over the document and return the relevant data (returns an object like lines 11 and 12)
      // doc.id is that random string (IICkYM7yn3s7bmlKpwPj)
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
      );
    });
    return unsub;
  }, []);

  const sendMessage = (e) => {
    // all the logic to send the message goes here
    e.preventDefault();

    const collectionRef = collection(db, "messages");
    const payload = {
      message: input,
      username: username,
      timestamp: serverTimestamp(),
    };
    addDoc(collectionRef, payload);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Welcome, {username} 🚀</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            variant="contained"
            color="primary"
            disabled={!input || input.length >= 50}
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon  />
          </IconButton>
        </FormControl>
      </form>

      {/* rendering the message */}
      <FlipMove>
        {messages.map(({ id, message }) => {
          // passes the message as an object
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
