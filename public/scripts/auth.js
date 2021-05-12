const accountDetails = document.querySelector('.account-details');

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {

    //profile pic
    if (storage.ref('users/' + user.uid + '/profile.jpg')) {
      storage.ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
        img.src = imgUrl;
      }).catch(error => {
      }) 
    }
    //account info
    const html = `
      <div> Logged in as ${user.email}</div>

    `
    accountDetails.innerHTML = html; 

    console.log('user logged in: ', user);
    //db.collection('guides').get().then(snapshot => {
      setupLobby(user);
      setupUI(user);
    //});
  } else {
    //hide account info
    accountDetails.innerHTML = ''; 

    console.log('user logged out');
    setupLobby();
    setupUI(); 
  }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// dp
let img = document.getElementById('img');
let file = {};

function chooseFile(e) {
  file = e.target.files[0];
}

const dpForm = document.querySelector('#dp-form');
dpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  storage.ref('users/' + auth.currentUser.uid + '/profile.jpg').put(file).then(function () {
    console.log('successfully uploaded');
    storage.ref('users/' + auth.currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
      img.src = imgUrl;
    }).catch(error => {
    });
  }).catch(error => {
    console.log(error.message);
  })


  // close the dp modal & reset form
  const modal = document.querySelector('#modal-account');
  dpForm.reset();
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});


// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});
