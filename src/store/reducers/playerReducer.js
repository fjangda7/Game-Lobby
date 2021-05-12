const initState = {
  players: [
    {1: ''},
    {2: ''},
    {3: ''},
    {4: ''}
  ]
}

const projectReducer = (state = initState, action) => {

  switch(action.type) {
    case 'EDIT_LOBBY':
      console.log('changed lobby, colour: ', action.text, 'player id: ', action.playerKey);
      return state; 
    case 'EDIT_LOBBY_ERROR':
      console.log('changed lobby error: ', action.err);
      return state; 
    default: 
      return state; 
  }
}

export default projectReducer