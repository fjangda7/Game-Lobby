
export const playerData = (text, playerKey) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to database
    const firestore = getFirestore(); 
    var obj = {};
    obj[playerKey] = text; 
    firestore.collection('players').doc('hGy3ZfBj00ZhmL6xhlxd').update(obj).then(() => {
      dispatch({ type: 'EDIT_LOBBY', text, playerKey});
    }).catch((err) => {
      dispatch({ type: 'EDIT_LOBBY_ERROR', err});
    })
  }

};