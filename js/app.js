angular.module('fireideaz', ['firebase',
'ngDialog',
'lvl.directives.dragdrop',
'ngSanitize',
'ngAria',
'ngFileUpload']);

require('./auth.js')
require('./utils.js')
require('./enterClick.js')
require('./mainController.js')
require('./messageController.js')

require('./directives/about.js')
require('./directives/autoFocus.js')
require('./directives/boardContext.js')
require('./directives/dialogs.js')
require('./directives/header.js')
require('./directives/mainContent.js')
require('./directives/mainPage.js')
require('./directives/menu.js')
require('./directives/sidebar.js')
require('./directives/spinner.js')

require('./services/firebaseService.js')
require('./services/importExportService.js')
require('./services/modalService.js')
require('./services/voteService.js')
