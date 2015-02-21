var ReplyBox = require('../components/replyBox');

var UserStore = require('../stores/user');

var Utils = require('../utils');

var MessageBox = React.createClass({
	getInitialState: function () {
		return {
			user: {
				profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
				id: 2,
				name: 'Ryan Clark',
				status: 'online'
			},
			lastAccess: {
				recipient: 1424469794050,
				currentUser: 1424469794080
			},
			messages: [
				{
					contents: 'Hey!',
					from: 2,
					timestamp: 1424469793023
				},
				{
					contents: 'Hey, what\'s up?',
					from: 1,
					timestamp: 1424469794000
				}
			]
		};
	},
	render: function () {
		var messagesLength = this.state.messages.length;
		var currentUserID = UserStore.user.id;

		var messages = this.state.messages.map(function (message, index) {
			var messageClasses = React.addons.classSet({
				'message-box__item': true,
				'message-box__item--from-current': message.from === currentUserID,
				'clear': true
			});

			return (
				<li key={ message.timestamp + '-' + message.from } className={ messageClasses }>
					<div className="message-box__item__contents">
						{ message.contents }
					</div>
				</li>
			);
		});

		var lastMessage = this.state.messages[messagesLength -1];

		if (lastMessage.from === currentUserID) {
			if (this.state.lastAccess.recipient >= lastMessage.timestamp) {
				var date = Utils.getShortDate(lastMessage.timestamp);
				messages.push(
					<li key="read" className="message-box__item message-box__item--read">
						<div className="message-box__item__contents">
							Read { date }
						</div>
					</li>
				);
			}
		}

		return (
			<div className="message-box">
				<ul className="message-box__list">
					{ messages }
				</ul>
				<ReplyBox />
			</div>
		);
	}
});

module.exports = MessageBox;