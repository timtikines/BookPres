$(document).ready(function(){
	$(".menu").accordion({collapsible:true});
	$("img").mouseenter(function(){
		$(this).animate({
			height+=10px, width+=10px;
		});
	});
});