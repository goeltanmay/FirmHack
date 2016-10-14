function ConversationManager (sb) {
	// body...
	chats=[];

	this.__init__ = function (argument) {
		// body...
		// get old chats of this user
		var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
		channelListQuery.includeEmpty = true;

		if (channelListQuery.hasNext) {
		    channelListQuery.next(function(channelList, error){
		        if (error) {
		            console.error(error);
		            return;
		        }

		        channelList.forEach(function (channel) {
		        var old_chat = new Chat(sb);
		        old_chat.init_with_chat_channel(channel)
		        chats.push(old_chat);
		        });
		    });
		}
	}
	this.start_new_chat = function (user) {
		// start a new chat
		var deferred = $.Deferred();
		var new_chat = new Chat(sb);
		new_chat.__init__(user).done(function (argument) {
			// body...
			chats.push(new_chat);
			deferred.resolve(new_chat);
		});
		return deferred.promise();
	}

	this.get_chats = function () {
		// get old chats of user?
		
		return chats;
	}

	return this;
}