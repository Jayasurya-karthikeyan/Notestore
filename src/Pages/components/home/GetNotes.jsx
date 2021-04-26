import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "../../firebase";

import Notes from "./Notes";
import NotesLoader from "./NotesLoader";

export default function GetNotes() {
    const Loader = NotesLoader(Notes);
    const [state,setState] = useState({
        isloaded: false,
        notes: null,
    });
    const notes = [];

  useEffect(() => {
    var db = firebase.firestore();
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const docData = {
                id : doc.id,
                created : doc.data().created,
                note : doc.data().note,
            };
            notes.push(docData);
        });
        setState({ isloaded : true , notes : notes});
      });
  }, [setState]);

  


  return <div className="container mt-5">
      <Loader isloaded={state.isLoaded} notes={state.notes} />
  </div>;
}
