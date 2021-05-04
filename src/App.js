import styles from './App.module.css';
import Player from './components/Player'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {

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

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id))
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
    else {
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

  return (
    <Container className="App">
      <Container maxWidth="lg" className={styles.container}>
        <Header />
        <Grid container spacing={3} justify="center">
          <Grid item xs={4} sm={5} maxWidth="xs" className={styles.player_container} style={{backgroundColor: p1background}}>
            <Player playerNumber={1} colors={colors} onDelete = {deleteColor} onChange={setBackground}/>
          </Grid>
          <Grid item xs={3} sm={1}></Grid>
          <Grid item xs={4} sm={5}  maxWidth="xs"  className={styles.player_container} style={{backgroundColor: p2background}}>
            <Player playerNumber={2} colors={colors} onDelete = {deleteColor} onChange={setBackground}/>
          </Grid>
        </Grid>

        <Grid container spacing = {4}>
          <Grid item>
            <p style={{color:'white'}}> kjfddlkjfd</p>
          </Grid>
        </Grid>


        <Grid container spacing = {3} justify="center">
          <Grid item xs={4} sm={5} maxWidth="xs" className={styles.player_container} style={{backgroundColor: p3background}}>
            <Player playerNumber={3} colors={colors} onDelete = {deleteColor} onChange={setBackground}/>
          </Grid>
          <Grid item xs={3} sm={1}></Grid>
          <Grid item xs={4} sm={5}  maxWidth="xs"  className={styles.player_container} style={{backgroundColor: p4background}}>
            <Player playerNumber={4} colors={colors} onDelete = {deleteColor} onChange={setBackground}/>
          </Grid>
        </Grid>


      </Container>
    </Container>
  );
}

export default App;
