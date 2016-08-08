$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var add = $('.add-item_input').val();
		var html = '<li class="sl-item">'+
					'<span class="left-check">&#10003;</span>'+
					'<span class="middle-text">'+add+'</span>'+
					'<span class="right-ex">&#10007;</span>'+
				'</li>';
		$('.what-i-need-list').append(html);
		$('.add-item_input').val('');
	});
	$('body').on('click','.left-arrow',function() {
		$(this).removeClass('left-check').addClass('up-arrow');
		$(this).parent().appendTo('.what-i-got-list');
	});
	$('body').on('click','.up-arrow',function() {
		$(this).removeClass('up-arrow').addClass('left-check');
		$(this).parent().appendTo('.what-i-need-list');
	});
	$('body').on('click','.right-ex',function() {
		$(this).parent().remove();
	});
});