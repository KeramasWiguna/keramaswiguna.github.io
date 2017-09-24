var date = new Date();
$('.date').text(date.getFullYear());

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px,'+wScroll/2+'%)'
	});

	if(wScroll > $('.programming').offset().top - ($(window).height()/4)){

		$('.programming .from-left').each(function(i){

			setTimeout(function(){
				$('.programming .from-left').eq(i).addClass('muncul');
			}, 150*(i+1));
			
		});
	}

	if(wScroll > $('.videogame').offset().top - ($(window).height()/3)){

		$('.videogame .from-left').each(function(i){

			setTimeout(function(){
				$('.videogame .from-left').eq(i).addClass('muncul');
			}, 150*(i+1));
			
		});
	}

	if(wScroll > $('.reading').offset().top - ($(window).height()/3)){

		$('.reading .from-right').each(function(i){

			setTimeout(function(){
				$('.reading .from-right').eq(i).addClass('muncul');
			}, 150*(i+1));
			
		});
	}

});