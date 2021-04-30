import React from "react";
import Card from "@material-ui/core/Card";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';


export default function Notes(props) {

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));
  
  const { notes } = props;
  if (!notes || notes.length === 0) {
    return <p className="mt-5"> You haven't created any notes yet</p>;
  } else {
    return (
      <>
        {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> <br></br><br></br> */}
        <h4 className="container"> Your Notes </h4>
        <div className="container mt-4">
          <div className="card-columns">
            {notes.map((note) => {
              return (
                <Card key={note.id} className="card pt-3">
                  <h6 className="m-0">{note.note}</h6>
                </Card>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

