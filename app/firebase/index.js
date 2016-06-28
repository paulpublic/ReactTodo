import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAqpjcdTJw1rWaLDmmMZNgfBg6UtvQnQxU",
    authDomain: "reacttodo-4f649.firebaseapp.com",
    databaseURL: "https://reacttodo-4f649.firebaseio.com",
    storageBucket: "reacttodo-4f649.appspot.com",
  };

  firebase.initializeApp(config);
} catch(e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
