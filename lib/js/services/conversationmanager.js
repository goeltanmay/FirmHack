function ConversationManager () {
	// body...
	this.chats=[];

	this.start_new_chats = function (user) {
		// start a new chat
		var new_chat = Chat();
	}

	this.get_chats = function (argument) {
		// get old chats of user?
		return this.chats;
	}
}