//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBgiMjmUUVhFPYzf5SFl2vDCwyD1dpyon4",
    authDomain: "kwitterproject-ae1db.firebaseapp.com",
    databaseURL: "https://kwitterproject-ae1db-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-ae1db",
    storageBucket: "kwitterproject-ae1db.appspot.com",
    messagingSenderId: "22698403051",
    appId: "1:22698403051:web:0095719debcac9bbca8aae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user = localStorage.getItem("user");
room_name = localStorage.getItem("room_name");
console.log(room_name);

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function send() {
    message = document.getElementById("inpt_msg").value;

    firebase.database().ref(room_name).push({
        likes: 0,
        message: message,
        name: user
    });

    document.getElementById("inpt_msg").value = "";
}

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem('room_name');
    window.location = "index.html";
}