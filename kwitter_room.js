
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addroom()
     {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
           localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room - " + Room_names);
       row = "<div class='room_name' id="+Room_names +"</div><hr>";
       document.getElementById("output").innerHtml += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
