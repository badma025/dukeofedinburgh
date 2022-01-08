import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import "./index.css";
import db from "./firebase";
import {
  handleNew,
  handleEdit,
  handleDelete,
  handleQueryDelete,
} from "./utils";
import Dot from "./components/Dot";

function App() {
  const [colours, setColours] = useState([
    { name: "loading..", id: "inital", value: "initial" },
  ]);
  // fetching the colours
  useEffect(() => {
    ;
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    //Document snapshot immediately with the current contents of the single document. Each time a change is made, the function is updated.
    // collects the "colours" collection and runs a function which maps over each colour and sets it to 'relevant data' and adds the id property with the colour's unique id.
    // relevant data gets the data we stored (name, value)
    const unsub = onSnapshot(q, (snapshot) => {
      setColours(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return (
    <div className="main">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <button className="button" onClick={handleQueryDelete}>
        Query Delete
      </button>
      <ul>
        {/* mapping over each colour to get its id, value and name from Firebase Firestore */}
        {colours.map((colour) => {
          return (
            <li key={colour.id}>
              <button className="button2" onClick={() => handleEdit(colour.id)}>
                edit
              </button>
              <button
                className="button2"
                onClick={() => handleDelete(colour.id)}
              >
                delete
              </button>
              <Dot color={colour.value} />
              {colour.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
