var Dispatcher = require('../dispatchers/app');

var messagesActions = {
	changeOpenChat: function (newUserID) {
		Dispatcher.handleViewAction({
			type: 'updateOpenChatID',
			userID: newUserID
		});
	}
};

module.exports = messagesActions;