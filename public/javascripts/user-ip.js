(function($, global){
	$(global.document).ready(function() {
		$.get('/api/user-ip', function(userIp) {
			$('#user-ip').html(userIp);
		});
	});
})(jQuery, window);