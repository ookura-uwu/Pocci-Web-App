// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRY-jakbKKCdLHin4rwcdHv0WLxGEZqL0",
    authDomain: "pochi-iqt-20681.firebaseapp.com",
    databaseURL: "https://pochi-iqt-20681.firebaseio.com",
    projectId: "pochi-iqt-20681",
    storageBucket: "pochi-iqt-20681.appspot.com",
    messagingSenderId: "401700244702",
    appId: "1:401700244702:web:9d6ef73075798471f9464f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

var database = firebase.database();

