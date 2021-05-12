import React from "react";
import styles from './App.module.css';
import Player from './components/Player'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {playerData} from './store/actions/playerActions';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

function App(props) {

  const [colors, setColors] = useState([
    {
        id: 1, 
        text: 'red',
    },
    {
        id: 2, 
        text: 'blue',
    },
    {
        id: 3, 
        text: 'green',
    },
    {
        id: 4, 
        text: 'yellow',
    },
  ])

  const deleteColor = (text) => {
    setColors(colors.filter((color) => color.text !== text))
  }
  
  const [value1, setValue1] = useState('Choose Colour');
  const [value2, setValue2] = useState('Choose Colour');
  const [value3, setValue3] = useState('Choose Colour');
  const [value4, setValue4] = useState('Choose Colour');

  const setValue = (text, playerKey) => {

    switch(playerKey) {
      case 1:
        return setValue1(text);
      case 2:
        return setValue2(text);
      case 3:
        return setValue3(text);
      case 4:
        return setValue4(text);
      default: break;
    }
  }

  const resetScreen = ({players}) => {
    players.forEach(player => {
      for (let key of Object.keys(player)) {
        var playerColour = player[key];
        var playerKey = parseInt(key, 10);
        if (playerColour === "red" || playerColour === "green" || playerColour === "yellow" || playerColour === "blue"){
          setBackground(playerColour, playerKey);
          deleteColor(playerColour);
          setValue(playerColour, playerKey);
        }

      }
    })
  }

  const [p1background,p1setbackground] = useState('white');
  const [p2background,p2setbackground] = useState('white');
  const [p3background,p3setbackground] = useState('white');
  const [p4background,p4setbackground] = useState('white');
  const setBackground = (text, playerKey) => {
    var newColor; 

    if (text === 'red'){
      newColor = '#ffbfbf';
    }
    else if (text === 'blue'){
      newColor = '#bfebff';
    }
    else if (text === 'green'){
      newColor = '#c8ffbd';
    }
    else{
      newColor = '#f5f1b8';
    }

    switch(playerKey) {
      case 1:
        return p1setbackground(newColor);
      case 2:
        return p2setbackground(newColor);
      case 3:
        return p3setbackground(newColor);
      case 4:
        return p4setbackground(newColor);
      default: break;
    }
  }

  const {players} = props; 

  useEffect(() => {
    if (players) {
      console.log(players);
      resetScreen({players});
    }
  }, [players]);

  if (players) {
    return (
      <BrowserRouter>
      <Container className="App">
        <Container maxWidth="lg" className={styles.container}>
          <Header /> 
          <Grid container spacing={3} justify="center">
            <Grid item xs={4} sm={5} className={styles.player_container} style={{backgroundColor: p1background}}>
              <Player playerNumber={1} colors={colors} onDelete = {deleteColor} onChange={setBackground} onClick={setValue} clickValue={value1} updatePlayer={props.playerData}/>
            </Grid>
            <Grid item xs={3} sm={1}></Grid>
            <Grid item xs={4} sm={5}   className={styles.player_container} style={{backgroundColor: p2background}}>
              <Player playerNumber={2} colors={colors} onDelete = {deleteColor} onChange={setBackground} onClick={setValue} clickValue={value2} updatePlayer={props.playerData}/>
            </Grid>
          </Grid>

          <Grid container spacing = {4}>
            <Grid item>
              <p style={{color:'white'}}> kjfddlkjfd</p>
            </Grid>
          </Grid>

          <Grid container spacing = {3} justify="center">
            <Grid item xs={4} sm={5} className={styles.player_container} style={{backgroundColor: p3background}}>
              <Player playerNumber={3} colors={colors} onDelete = {deleteColor} onChange={setBackground} onClick={setValue} clickValue={value3} updatePlayer={props.playerData}/>
            </Grid>
            <Grid item xs={3} sm={1}></Grid>
            <Grid item xs={4} sm={5}   className={styles.player_container} style={{backgroundColor: p4background}}>
              <Player playerNumber={4} colors={colors} onDelete = {deleteColor} onChange={setBackground} onClick={setValue} clickValue={value4} updatePlayer={props.playerData}/>
            </Grid>
          </Grid>


        </Container>
      </Container>
      </BrowserRouter>
   );
  }
  else {

    return (
      <BrowserRouter>
        <Container className="App">
          <Container maxWidth="lg" className={styles.container}>
            <h1 style={{textAlign: 'center'}}>Loading lobby...</h1>
          </Container>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
    return {
      players: state.firestore.ordered.players ? state.firestore.ordered.players : null
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    playerData: (text, playerKey) => dispatch(playerData(text, playerKey))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(
    [
      { collection: 'players'}
    ]
  )
)(App);