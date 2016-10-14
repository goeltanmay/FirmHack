var Contact = React.createClass({
	render: function() {
    return (
      <div className="contact">
        {this.props.member.nickname}
        {this.props.member.isOnline}
      </div>
    );
  }
});