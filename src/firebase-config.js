const Rebase = require('re-base')
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyBteKHypn_THTV9FVq5zlILSWHX4taCdIs",
    authDomain: "company-portfolio-dea2f.firebaseapp.com",
    databaseURL: "https://company-portfolio-dea2f.firebaseio.com",
    projectId: "company-portfolio-dea2f",
    storageBucket: "",
    messagingSenderId: "356335014859",
    appId: "1:356335014859:web:20e4a283f37ab15d"
}
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export default config