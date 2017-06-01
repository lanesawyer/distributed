var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

import angular from 'angular';

import '../stylesheets/main.scss';
import '../index.html';
import '../components/boardContext.html';
import '../components/dialogs.html';
import '../components/header.html';
import '../components/mainContent.html';
import '../components/mainPage.html';
import '../components/menu.html';
import '../components/spinner.html';

var config = {
    apiKey: 'AIzaSyDKlqYdC-wUUOT7E7aRmRtEDtK6N8CAZ3U',
    authDomain: 'fun-retro-6216f.firebaseapp.com',
    databaseURL: 'https://fun-retro-6216f.firebaseio.com',
    projectId: 'fun-retro-6216f',
    storageBucket: 'fun-retro-6216f.appspot.com',
    messagingSenderId: '741022796633'
};

firebase.initializeApp(config);

angular.module('fireideaz', ['firebase',
               'ngDialog',
               'lvl.directives.dragdrop',
               'ngSanitize',
               'ngAria',
               'ngFileUpload']);

require('./main');
