import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "../../firebase";
import firebase from "firebase/app";


import SearchIcon from '@material-ui/icons/Search';


export default function Notes(props) {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    margin: "5px",
  };
  // const [input, setInput] = useState('');
  const [data, setData] = useState("");

  const { notes } = props;
  if (!notes || notes.length === 0) {
    return <p className="mt-5"> You haven't created any notes yet</p>;
  } else {
    return (
      <>
        <input
          style={BarStyling}
          value={data} 
          placeholder={"Search Note.."}
          onChange={(event) => {
            setData(event.target.value);
          }}
        />
        <h4 className="container"> Your Notes </h4>
        <div className="container mt-4">
          <div className="card-columns">
            {notes.map((note) => { 
              const content = (note.note); 
              // const contentl = content.toLowerCase(); 
              if(!data || data.length === 0){ 
              return (
                // connect(mapStateToProps), 
                // fireStoreConnect([
                // ]),
                <Card key={note.id} className="card pt-3">
                  <h6 className="m-0">{content}</h6> <br></br>
                </Card>
              ); }
              else {
                var db = firebase.firestore();
                const gamesRef = db.collection('notes'); 
                const queryRef = gamesRef.where('(note.note)', '>=', data);
                // const notesnote = note.note ;
                // const notelen=data.toLowerCase(); 
                return (
                  {collection:'notes' , orderBy :['created' , 'desc']} ,
                  <Card key={note.id} className="card pt-3">  
                    {/* <h6 className="m-0">{content} </h6>   */}
                    <h6 className="m-0"> {queryRef}</h6>   
                    {/* <h6 className="m-0"> no. of Characters :{data.toLowerCase().includes(notesnote.toLowerCase())}</h6> */}
                  </Card>
                );                
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
// const searchBar = document.forms['search-books'].querySelector['input'];
// searchBar.addEventListener('keyup',function(e){
//   const term = e.target.value.toLowerCase();
//   const books = list.getElementsByTagName9('li');
//   Array.from(books).forEach(function(book){
//     const title = book.firstElementChild.textContent;
//     if(title.toLowerCase().indexOf(term)!= -1){
//       book.style.display = 'block';
//     }else{
//       book.style.display = 'none';
//     }
//     }) 
// })    