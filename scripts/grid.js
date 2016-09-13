$(document).ready(function() {
	//Button Lights up
	$('.button').hover(function() {
		$(this).toggleClass('mouseover');
	});
	
	
	$(".left").click(function(){
		$(".Grid").empty();
		squares = prompt("Pick a number 1-100. You can do more but it'll take forever.");
	
		var square_size = $('.Grid').height()/squares -2;
	
		for (i = 1; i <= squares; i++) {
			for(j = 1; j <= squares; j ++){
				$('.Grid').append('<div class="pixel"></div>');	
				}
				$('.Grid').append('<div class="line"></div>');
				}
			
		$('.pixel').css('width',square_size);
		$('.pixel').css('height',square_size);

		$('.pixel').mouseenter(function() {	
			$(this).addClass('pixelLightUp');
		});
	});

	
	//Idea to have it start out transparent and add opacity over time. Dud so far.
	/*$('.pixel').mouseenter(function() {	
		
		var sketchOpacity = $(this).css('opacity');
		
		if(sketchOpacity < 100){
			$(this).css('opacity', sketchOpacity + 0.1);
		}
	});*/
	
	
});