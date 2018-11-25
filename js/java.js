$(document).ready(function() {
	var n = '#nav', no = 'open';
	$('#nav-menu').click(function() {
		if ($(n).hasClass(no)) {
			//$(n).removeClass(no);
			$(n).animate({height:0},300);
			setTimeout(function() {
				$(n).removeClass(no).removeAttr('style');
			},320);
		}
		else {
			//$(n).addClass(no);
			var newH = $(n).css('height','auto').height();
			$(n).height(0).animate({height:newH},300);
			setTimeout(function() {
				$(n).addClass(no).removeAttr('style');
			},320);
		}
	});
});