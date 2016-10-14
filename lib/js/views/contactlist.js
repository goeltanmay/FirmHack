var ContactList = React.createClass({
	
	render: function() {
	var contactsDom = this.props.memberList.map(function (member) {
		// body...
		return (
	      <div className="chatbox">
	        Hello, world! I am a chatbox.
	      </div>
	    );
	});
    
  }
});