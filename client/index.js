function onSignIn(googleUser) {
    let idToken = googleUser.getAuthResponse().id_token;
   
    $.ajax({
        url: 'http://localhost:3000/user/signin',
        method: 'POST',
        data: {
            idToken
        }
    }).done(response => {
        console.log('2222222222');
        localStorage.setItem('token', response.token)
    }).fail(function (jqXHR, textStatus) {
        console.log('Error:', textStatus);
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.removeItem('token')
    });
  }