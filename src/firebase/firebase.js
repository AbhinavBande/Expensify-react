import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDm7OEbRbCznbzWDpTbDnNwtnHundG7LGA",
    authDomain: "expensify-cc306.firebaseapp.com",
    databaseURL: "https://expensify-cc306.firebaseio.com",
    projectId: "expensify-cc306",
    storageBucket: "expensify-cc306.appspot.com",
    messagingSenderId: "624325734067",
    appId: "1:624325734067:web:9518689dd3af5dfc"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'abhinav bande',
    age: 19,
    location: {
        city: 'bikaner',
        country: 'india'
    }
})