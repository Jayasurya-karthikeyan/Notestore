import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import "../../firebase";
import firebase from "firebase/app";
import Notes from "./Notes";
import NotesLoader from "./NotesLoader";

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryList, setCountryList] = useState();


const fetchData = async () => {
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
        setCountryList(notes) 
      });
  };


  const updateInput = async (input) => {
    const filtered = notes.filter(docData => {
     return docData.note.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
  }
  
  const Loader = NotesLoader(Notes);
  const [state,setState] = useState({
      isloaded: false,
      notes: null,
  });
  const notes = [];

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      {/* <h1>Country List</h1> */}

      <SearchBar 
       input={input} 
       onChange={updateInput}
       style={{marginBottom:"30px"}}
      />
      {/* <CountryList countryList={countryList}/> */}
      <Loader countryList={countryList} isloaded={state.isloaded} notes={state.notes} /> 
    </>
   );
}

export default SearchPage