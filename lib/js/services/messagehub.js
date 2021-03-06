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
		    console.log(channel,message);
		    exists = false;
		    cm.get_chats().forEach(function (chat) {
		   		if (chat.get_chat_channel().coverUrl == channel.coverUrl) {
		   			chat.handle_new_message();
		   			exists = true;
			   	}
			   	// body...
			   	if(!exists){
			   		var new_chat = new Chat(sb);
			   		new_chat.init_with_chat_channel(channel);
			   		cm.chats.push(new_chat);
			   		new_chat.handle_new_message();
			   	}
		    });
		};

		sb.addChannelHandler("12", channelHandler);
	}
	return this;
}