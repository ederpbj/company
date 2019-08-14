//import firebase from "firebase";
//import Rebase from "re-base";

var Rebase = require('re-base');
var firebase = require('firebase');

//const firebaseConfig = {
var app = firebase.initializeApp({
    apiKey: "AIzaSyBteKHypn_THTV9FVq5zlILSWHX4taCdIs",
    authDomain: "company-portfolio-dea2f.firebaseapp.com",
    databaseURL: "https://company-portfolio-dea2f.firebaseio.com",
    projectId: "company-portfolio-dea2f",
    storageBucket: "gs://company-portfolio-dea2f.appspot.com/",
    messagingSenderId: "356335014859",
    appId: "1:356335014859:web:20e4a283f37ab15d"
})
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

var base = Rebase.createClass(app.database());

//const app = firebase.initializeApp(firebaseConfig)
//const config = Rebase.createClass(app.database())

export const storage = app.storage()

export default base