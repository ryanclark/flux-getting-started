var utils = require('../utils');

var UserStore = require('../stores/user');

var UserList = React.createClass({
	getInitialState: function () {
		return {
			openChatID: 0,
			messageList: [
				{
					lastMessage: {
						contents: 'Hey, what\'s up?',
						from: 1,
						timestamp: 1424469794000
					},
					lastAccess: {
						recipient: 1424469794050,
						currentUser: 1424469794080
					},
					user: {
						profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
						id: 2,
						name: 'Ryan Clark',
						status: 'online'
					}
				},
				{
					lastMessage: {
						contents: 'Want a game of ping pong?',
						from: 3,
						timestamp: 1424352522000
					},
					lastAccess: {
						recipient: 1424352522000,
						currentUser: 1424352522080
					},
					user: {
						read: true,
						profilePicture: 'https://avatars3.githubusercontent.com/u/2955483?v=3&s=460',
						name: 'Jilles Soeters',
						id: 3,
						status: 'online'
					}
				},
				{
					lastMessage: {
						contents: 'Please follow me on twitter I\'ll pay you',
						timestamp: 1424423579000,
						from: 4
					},
					lastAccess: {
						recipient: 1424423579000,
						currentUser: 1424423574000
					},
					user: {
						name: 'Todd Motto',
						id: 4,
						profilePicture: 'https://avatars1.githubusercontent.com/u/1655968?v=3&s=460',
						status: 'online'
					}
				}
			]
		}
	},
	render: function () {
		this.state.messageList.sort(function (a, b) {
			if (a.lastMessage.timestamp > b.lastMessage.timestamp) {
				return -1;
			}
			if (a.lastMessage.timestamp < b.lastMessage.timestamp) {
				return 1;
			}
			return 0;
		});

		var messages = this.state.messageList.map(function (message, index) {
			var date = utils.getNiceDate(message.lastMessage.timestamp);

			var statusIcon;
			if (message.lastMessage.from !== message.user.id) {
				statusIcon = (
					<i className="fa fa-reply user-list__item__icon" />
				);
			}
			if (message.lastAccess.currentUser < message.lastMessage.timestamp) {
				statusIcon = (
					<i className="fa fa-circle user-list__item__icon" />
				);
			}

			var isNewMessage = false;
			if (message.lastAccess.currentUser< message.lastMessage.timestamp) {
				isNewMessage = message.lastMessage.from !== UserStore.user.id;
			}

			var itemClasses = React.addons.classSet({
				'user-list__item': true,
				'clear': true,
				'user-list__item--new': isNewMessage,
				'user-list__item--active': this.state.openChatID === message.user.id
			});

			return (
				<li className={ itemClasses } key={ message.user.id }>
					<div className="user-list__item__picture">
						<img src={ message.user.profilePicture } />
					</div>
					<div className="user-list__item__details">
						<h4 className="user-list__item__name">
							{ message.user.name }

							<abbr className="user-list__item__timestamp">
								{ date }
							</abbr>
						</h4>
						<span className="user-list__item__message">
							{ statusIcon } { message.lastMessage.contents }
						</span>
					</div>
				</li>
			)
		}, this);

		return (
			<div className="user-list">
				<ul className="user-list__list">
					{ messages }
				</ul>
			</div>
		);
	}
});

module.exports = UserList;
