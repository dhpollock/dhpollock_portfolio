import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroSection from "../IntroSection/IntroSection"
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';



function App() {

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: 'left',
  //     color: theme.palette.text.secondary,
  //   },
  // }));
  // const classes = useStyles();

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <IntroSection/>
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>
  );
}

export default App;
