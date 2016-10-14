var ContactList = React.createClass({

	render: function() {
		console.log(this.props);
	var contactsDom = this.props.members.map(function (member) {
		// body...
		return (
	      <div className="chatbox">
	        Hello, world! I am {member.nickname}.
	      </div>
	    );
	});
	return (
      <div className="contactList">
        {contactsDom}
      </div>
    );
  }
});