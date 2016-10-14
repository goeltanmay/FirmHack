$(window).on('load', function initialize_chat (user,token) {
	// initializes the chat window.
	// makes the connections to SB
	// need user, token
	var sb = new SendBird({appId:"82E24C47-8A75-4552-ABD3-57EF743287E4"});
	sb.connect(user,token, function(user, error) {
		if(error){
			console.log(error);
			return;
		}

		// get all members list	
		var member_ledger = MemberLedger();
		member_ledger.__init__().then(function () {
			console.log(member_ledger.get_online_members());
		});

		//
				
	});
});