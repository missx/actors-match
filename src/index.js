import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import MainContainer from './containers/MainContainer';
import './index.css';


import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA3ALyiGclYJm9FjGS9hj_uCs-nZrWSrRk",
    authDomain: "actors-match.firebaseapp.com",
    databaseURL: "https://actors-match.firebaseio.com",
    storageBucket: "actors-match.appspot.com",
    messagingSenderId: "524814918098"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);
