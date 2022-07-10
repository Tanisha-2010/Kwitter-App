//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBgiMjmUUVhFPYzf5SFl2vDCwyD1dpyon4",
    authDomain: "kwitterproject-ae1db.firebaseapp.com",
    projectId: "kwitterproject-ae1db",
    storageBucket: "kwitterproject-ae1db.appspot.com",
    messagingSenderId: "22698403051",
    appId: "1:22698403051:web:0095719debcac9bbca8aae"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();