$(document).ready(function() {
	//Button Lights Up
	$('.button').hover(function() {
		$(this).toggleClass('mouseover');
	});
	
	//Start Button
	$(".left").click(function(){
		//Wipe Grid Clean
		$(".Grid").empty();
		//Ask User For a Number
		squares = prompt("Pick a number 1-100. You can do more but it'll take forever.");
		//Calculate Scale Grid Needs to Fit
		var square_size = $('.Grid').height()/squares -2;
		//Generate Grid
		for (i = 1; i <= squares; i++) {
			for(j = 1; j <= squares; j ++){
				$('.Grid').append('<div class="pixel"></div>');	
				}
				//Basically a Hard Return
				$('.Grid').append('<div class="line"></div>');
				}
		//Change Squares to Match Scale	Calculation
		$('.pixel').css('width',square_size);
		$('.pixel').css('height',square_size);
		//Draw on Grid
		$('.pixel').mouseenter(function() {	
			$(this).addClass('pixelLightUp');
		});
	});
	
	//Color Button
	$(".right").click(function(){
		//Wipe Grid Clean
		$(".Grid").empty();
		//Ask User For a Number
		squares = prompt("Pick a number 1-100. You can do more but it'll take forever.");
		//Calculate Scale Grid Needs to Fit
		var square_size = $('.Grid').height()/squares -2;
		//Generate Grid
		//First Loop Creates Columns (I think, It's been a while)
		for (i = 1; i <= squares; i++) {
			//Second Loop Fills Each Column
			for(j = 1; j <= squares; j ++){
				$('.Grid').append('<div class="pixel"></div>');	
				}
				//Basically a Hard Return
				$('.Grid').append('<div class="line"></div>');
				}
			
		$('.pixel').css('width',square_size);
		$('.pixel').css('height',square_size);
		//Change Squares to start Black. It just looks better.
		$('.pixel').addClass('pixelLightUp');
		
		//borrowed code I'm learning with
		function get_random_color() {
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		}

		$('.pixel').mouseenter(function() {	
			$(this).css("background-color", get_random_color());
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