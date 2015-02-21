var Dispatcher = require('../dispatchers/app');

var messagesActions = {
	changeOpenChat: function (newUserID) {
		Dispatcher.handleViewAction({
			type: 'updateOpenChatID',
			userID: newUserID
		});
	},
	sendMessage: function (userID, message) {
		Dispatcher.handleViewAction({
			type: 'sendMessage',
			userID: userID,
			message: message,
			timestamp: +new Date()
		});
	}
};

module.exports = messagesActions;