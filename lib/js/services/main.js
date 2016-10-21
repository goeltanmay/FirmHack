$(window).on('load', function initialize_chat (user,token) {
	// initializes the chat window.
	// makes the connections to SB
	// need user, token
	var sb = new SendBird({appId:"82E24C47-8A75-4552-ABD3-57EF743287E4"});
	sb.connect("abilala","0df5b9f05b723054535482d75e1ad163bae06e2b", function(user, error) {
		if(error){
			console.log(error);
			return;
		}

		// get all members list	
		var member_ledger = MemberLedger();
		member_ledger.__init__().then(function () {
			members = member_ledger.get_all_members();
			console.log(members);

			ReactDOM.render(
			  <ContactList members={members} />, document.getElementById('content')
			);
			// var chat = new Chat(sb);
			// chat.__init__(members[0]).done(function (argument) {
			// 	// body...
			// 	console.log(chat);
			// 	chat.send_message("hahaha").done(function () {
			// 		// body...
			// 		console.log("done");
			// 	});
			// });
			

			var conversationManager = ConversationManager(sb);
			conversationManager.__init__();
			conversationManager.start_new_chat(members[2]).done(function (chat) {
				// body...
				// console.log(conversationManager.get_chats());
				$("#button").on('click', function callback (argument) {
	    			// body...
		    		var message = $("#message").val();
		    		chat.send_message(message);
	    		});
			});

			// var messageHub = new MessageHub()
		});

		//
				
		var conversationManager = ConversationManager();
		var messageHub = MessageHub(sb, conversationManager);
		messageHub.recieve_message_setup();

	});
});