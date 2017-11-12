import 'font-awesome/scss/font-awesome.scss';
import 'roboto-fontface/css/roboto-fontface.scss';
import './stylesheets/main.scss';

// Vendor imports
window.$ = require('./js/vendor/jquery-3.2.1.min.js');
require('angular');
window.firebase = require('firebase');
require('angularfire');
require('angular-aria');
require('angular-sanitize');
require('angular-mocks');
require('core-js/shim');
require('ng-dialog');
require('ng-file-upload');
require('papaparse');
require('jspdf');

require('./js/vendor/firebaseInitialization');
require('./js/vendor/lvl-drag-drop');
require('./js/vendor/lvl-uuid');

// Main app

angular.module('fireideaz', ['firebase',
'ngDialog',
'lvl.directives.dragdrop',
'ngSanitize',
'ngAria',
'ngFileUpload']);

require('./js/auth.js')
require('./js/utils.js')
require('./js/enterClick.js')
require('./js/mainController.js')
require('./js/messageController.js')

require('./js/directives/about.js')
require('./js/directives/autoFocus.js')
require('./js/directives/boardContext.js')
require('./js/directives/dialogs.js')
require('./js/directives/header.js')
require('./js/directives/mainContent.js')
require('./js/directives/mainPage.js')
require('./js/directives/menu.js')
require('./js/directives/sidebar.js')
require('./js/directives/spinner.js')

require('./js/services/firebaseService.js')
require('./js/services/importExportService.js')
require('./js/services/modalService.js')
require('./js/services/voteService.js')
