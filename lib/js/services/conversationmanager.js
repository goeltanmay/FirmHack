function ConversationManager () {
	// body...
	this.chats=[];

	this.start_new_chat = function (me,user) {
		// start a new chat
		var new_chat = Chat(me, user);
		this.chats.push(new_chat);
	}

	this.get_chats = function () {
		// get old chats of user?
		return this.chats;
	}


}