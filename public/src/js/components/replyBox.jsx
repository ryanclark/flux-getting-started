var ReplyBox = React.createClass({
	render: function () {
		return (
			<div className="reply-box">
				<input className="reply-box__input" placeholder="Type message to reply.." />
				<span className="reply-box__tip">
					Press <span className="reply-box__tip__button">Enter</span> to send
				</span>
			</div>
		);
	}
});

module.exports = ReplyBox;