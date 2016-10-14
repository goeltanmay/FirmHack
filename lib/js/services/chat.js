function Chat (sb) {
	// body...
	var chat_channel;
	var deferred = $.Deferred();
	var messages = [];
	this.__init__ = function (user) {
	// var userIds = ['unique_user_id1', 'unique_user_id2'];
	// distinct is false 
	sb.GroupChannel.createChannelWithUserIds([user], false, user.nickname, "", null, function(channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }
		    chat_channel = channel;
		    // console.log(channel);
		    deferred.resolve();
		    return;
		});

	return deferred.promise();
	}

	this.send_message = function (message) {
		// SB call to send message
		var deferred = $.Deferred();
		chat_channel.sendUserMessage(message, null, function(message, error){
		    if (error) {
		        console.error(error);
		        return;
		    }
		    deferred.resolve();
		    console.log(message);
		});
		return deferred.promise();
	}

	this.recieve_message = function (message) {
		// DO something with this message
	}

	this.add_user = function (user) {
		// body...
		var deferred = $.Deferred();
		chat_channel.inviteWithUserIds([user], function(response, error) {
	    	if (error) {
	        	console.error(error);
	        	deferred.resolve();
	        	return;
	    	}
		});
		return deferred.promise();
	}

	this.leave = function () {
		// body...
		var deferred = $.Deferred();
		chat_channel.leave(function(response, error) {
		    if (error) {
		        console.error(error);
		        deferred.resolve();
		        return;
		    }
		});
		return deferred.promise();
	}

	this.retrieve_old_messages = function (num) {
		// body...
		var messageListQuery = chat_channel.createPreviousMessageListQuery();
		var deferred = $.Deferred();
		messageListQuery.load(num, true, function(messageList, error){
		    if (error) {
		        console.error(error);
		        return;
		    }
		    console.log(messageList);
		    messages = messageList.concat(messages);
		    deferred.resolve();
		});
		return deferred.promise();
	}

	this.destroy = function (argument) {
		// body...
		sb.removeChannelHandler(chat_channel.cover_url);
	}

	this.handle_new_message = function (ui_func) {
		// body...
		// DO something
		ui_func();
	}
	return this;
}