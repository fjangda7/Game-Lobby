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
      return state; 
    case 'EDIT_LOBBY_ERROR':
      return state; 
    default: 
      return state; 
  }
}

export default projectReducer