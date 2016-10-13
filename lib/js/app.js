$(window).load(function _init (argument) {
	// body...
	var sb = new SendBird({
    appId:"82E24C47-8A75-4552-ABD3-57EF743287E4"});

    sb.connect("goeltanmay_try1","347ed205535cc5db31c8f727fe9643da578814e9", function(user, error) {
    	var userIds = ['goeltanmay_try'];
		// distinct is false 
		sb.GroupChannel.createChannelWithUserIds(userIds, true, "chat", "", "", function(channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }
		    console.log(channel);
		    $("#button").on('click', function callback (argument) {
	    	// body...
	    	var message = $("#message").val();
	    	channel.sendUserMessage(message, null, function(message, error){
				    if (error) {
				        console.error(error);
				        return;
				    }
				    console.log(message);
				});
    		});
		});
    });

    var channelHandler = new sb.ChannelHandler();

	channelHandler.onMessageReceived = function(channel, message){
	    console.log(channel, message);
	    alert(message.message);
	};

	sb.addChannelHandler("1", channelHandler);
    

    $("#button").on('click', function callback (argument) {
    	// body...
    	var message = $("#message").val();

    });

    var memberLedger = new MemberLedger();
    console.log(memberLedger.get_list_of_members());
})