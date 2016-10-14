$(window).on('load', function () {

	$('#submit_button').on('click', function (e) {
		// body...
		e.preventDefault();
		var userid = $('#userid').val();
		$.ajax({
			url: "https://api.sendbird.com/v3/users",
			beforeSend: function (request)
            {
                request.setRequestHeader("Api-Token", "5d57a9dd5af4ca89f448d22a1d1ebed81bcef695");
            }
		}).done(function (members) {
			members.users.forEach(function (member) {
				// body...
				if (member.user_id = userid){
					window.location.replace("index.html")
				}
			});
			// body...
			
		});
	})
	// body...
});