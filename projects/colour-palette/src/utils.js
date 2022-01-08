import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from "firebase/firestore";
import db from "./firebase";
// addDoc is used to set the values of a specific document. This takes in 2 arguments; the the reference to the document and what it will do to the document (payload).
const handleNew = async () => {
  // collectionRef takes in 2 arguments and an optional third parameter; the database connection, the collection name and the id. If the third parameter is not there, it will auto-id.
  // db = database connection
  // "colours" = collection name
  // "colour001" = id
  const name = prompt("Enter colour name");
  const value = prompt("Enter colour value");
  const collectionRef = collection(db, "colours");
  const payload = { name: name, value: value, timestamp: serverTimestamp() };
  const docRef = await addDoc(collectionRef, payload);
  console.log(`The new ID is: ${docRef.id}`);
};

const handleEdit = async (id) => {
  // setDoc takes in three arguments; the docRef (document reference) and the payload (what you do to the document)
  // id refers to the parameters of the function :)
  const name = prompt("Enter colour name");
  const value = prompt("Enter colour value");
  const docRef = doc(db, "colours", id);
  const payload = { name: name, value: value, timestamp: serverTimestamp() };
  updateDoc(docRef, payload);
};

const handleDelete = async (id) => {
  // deleteDoc deletes a document and takes in the arguments of docRef.
  const docRef = doc(db, "colours", id);
  deleteDoc(docRef);
};

// the query contains the collectionRef (which collection do we want to perform this in), and the statement. "name" refers to the name property in Firebase.
//we then get the docs that match this query and
const handleQueryDelete = async (id) => {
  const name = prompt("Enter colour name");
  const collectionRef = collection(db, "colours");

  const q = query(collectionRef, where("name", "==", name));
  const snapshot = await getDocs(q);

  const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));

  
  results.forEach(async (result) => {
      const docRef = doc(db, "colours", result.id);
    await deleteDoc(docRef)

  })
};

export { handleNew, handleEdit, handleDelete, handleQueryDelete };
