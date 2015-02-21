var ReplyBox = React.createClass({
	getInitialState: function () {
		return {
			value: ''
		};
	},
	updateValue: function (e) {
		this.setState({
			value: e.target.value
		});
	},
	render: function () {
		return (
			<div className="reply-box">
				<input value={ this.state.value } onChange={ this.updateValue } className="reply-box__input" placeholder="Type message to reply.." />
				<span className="reply-box__tip">
					Press <span className="reply-box__tip__button">Enter</span> to send
				</span>
			</div>
		);
	}
});

module.exports = ReplyBox;