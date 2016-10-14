function MessageHub (sb, cm) {
	// body...
	// send and recieve messages for chats
	var sendb = sb;
	var converstaionManager = cm;

	this.recieve_message_setup= function () {
		// body...
		// list of chats to set up message listeners

		var channelHandler = new sendb.ChannelHandler();

		channelHandler.onMessageReceived = function(channel, message){
		   // find the chat it belongs to
		   // call that chat's message handler
		    cm.get_chats().each(function (chat) {
		   		if (chat.chat_channel.cover_url == channel.cover_url) {
		   			chat.handle_new_message();
			   	}
		   	// body...
		   });
		};

		var converstaionManager = ConverstaionManager(sendb);
		converstaionManager.get_chats().each(function (chat) {
			chat.setup_message_listener();
		});

		sb.addChannelHandler(chat_channel.cover_url, ChannelHandler);
	}
}