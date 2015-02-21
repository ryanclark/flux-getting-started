var Header = require('./partials/header');
var UserList = require('./partials/userList');
var MessageBox = require('./partials/messageBox');

var Page = React.createClass({
	render: function () {
		return (
			<div className="app">
				<Header />

				<UserList />
				<MessageBox />
			</div>
		);
	}
});

React.render(<Page />, document.body);