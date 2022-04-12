var firebaseConfig = {
      apiKey: "AIzaSyB5w5TE3uSTriN8qN8ZFBved-MEA8TJSr4",
      authDomain: "kwiter-49f68.firebaseapp.com",
      databaseURL: "https://kwiter-49f68-default-rtdb.firebaseio.com",
      projectId: "kwiter-49f68",
      storageBucket: "kwiter-49f68.appspot.com",
      messagingSenderId: "266887319752",
      appId: "1:266887319752:web:6e753f420fccee534155fd"
    }
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
     function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
