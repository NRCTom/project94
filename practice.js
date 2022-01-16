var firebaseConfig = {
    apiKey: "AIzaSyBwNIRx4wiVIsN1NOBgQu7hNlQoJwxaZeU",
    authDomain: "practice-143ca.firebaseapp.com",
    databaseURL: "https://practice-143ca-default-rtdb.firebaseio.com",
    projectId: "practice-143ca",
    storageBucket: "practice-143ca.appspot.com",
    messagingSenderId: "1005956156609",
    appId: "1:1005956156609:web:aa52eb4551ec77a2ded840",
    measurementId: "G-0MWTMPZ6ZH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function username() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        game: "fortnite"
    });
}