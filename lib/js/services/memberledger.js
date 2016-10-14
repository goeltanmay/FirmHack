function MemberLedger(){
	// Has the responsibility of maintaining other members in the firm
	// maintain the list of members
	// listen to their status changes
	// provide others with the list of members 

	var list_of_members = [];

	this.__init__ = function  () {
		var deferred = $.Deferred();
		$.ajax({
			url: "https://api.sendbird.com/v3/users",
			beforeSend: function (request)
            {
                request.setRequestHeader("Api-Token", "5d57a9dd5af4ca89f448d22a1d1ebed81bcef695");
            }
		}).done( function (members) {
			list_of_members = members.users;
			// console.log(self.list_of_members);
			deferred.resolve();
			// this.return_this();
		});
		return deferred.promise();	
	}

	// this.list_of_members = ["user 1","user 2"];

	this.get_all_members = function () {
		return list_of_members;
	}

	this.get_online_members = function () {
		// TODO
		return list_of_members.filter(is_online);
	}

	this.get_offline_members = function () {
		// TODO
		return list_of_members.filter(is_online);
	}

	this.is_online = function (user){
		return user.is_online;
	}

	this.is_offline = function (user){
		return !user.is_online;
	}	

	this.return_this = function () {
		// body...
		return this;
	}

	return this;
	
}