const reactApp = document.querySelector('.reactApp');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};


// setup lobby
const setupLobby = (user) => {

  /*
  if (user) {
    console.log("logged in ")
    reactApp.innerHTML = '<div id="root"></div>';
  } else {
    reactApp.innerHTML = '<h5 class="center-align">Login to view the Game Lobby.</h5>';
    console.log("logged out")
  }
  */
  
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});