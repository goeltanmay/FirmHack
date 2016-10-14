var Parent = React.createClass({
  getInitialState: function() {
    return { members: null };
  },

  componentDidMount: function() {
  	var that = this;
  	var sb = new SendBird({appId:"82E24C47-8A75-4552-ABD3-57EF743287E4"});
	sb.connect("goeltanmay_try1","347ed205535cc5db31c8f727fe9643da578814e9", function(user, error) {
		if(error){
			console.log(error);
			return;
		}

		// get all members list	
		var member_ledger = MemberLedger();
		member_ledger.__init__().then(function () {
			var members = member_ledger.get_all_members();
			console.log(members);
			that.setState({members: members});
			var conversationManager = ConversationManager(sb);
			conversationManager.__init__();
		}.bind(that));

		//
				
		// var conversationManager = ConversationManager();
		// var messageHub = MessageHub(sb, conversationManager);
		// messageHub.recieve_message_setup();

	});
  },

  render: function() {
    if (this.state.members) {
      return <ContactList members={this.state.members} />;
    }

    return <div>Loading...</div>;
  }
});