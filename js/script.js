$(document).ready(function() {
    
	if( window.innerWidth < 480 )
	{
		$('#form-search input').attr('placeholder', 'Название или ИНН организац...');
	}
	
	$('.js-video video').on('play', function () {
        $(this).next().addClass('hidden');
        $(this).attr('controls', 'controls');		
    });
         
    $('.js-video video').on('pause', function () {
         $(this).next().removeClass('hidden');
         /*if( window.innerWidth > 768 )
		 {
		    $(this).removeAttr('controls', 'controls');
		 }*/
    });
    $('.video-btn').on('click', function () {
         let video = $(this).closest('.js-video').find('video')[0];
		 if( video.paused )
		 {
		     video.play();
		 }
		 else
		 {
			 video.pause();
		 }
    
    });	
	
	
	
    $('.js-read-more').on('click', function (e) {
		e.preventDefault();
		let $textMoreBlock = $(this).closest('.js-text-more');
		if( $textMoreBlock.length <= 0 )
		    return;
		$textMoreBlock.toggleClass('show-text-more');
        let $link = $(this);
		if( $link.text() == 'Подробнее'  )
		{
			$link.text('Свернуть');
		}
		else
		{
			$link.text('Подробнее');
		}
    });	
	
	
    $('.js-menu-btn').on('click', function () {
        $('.main-menu').toggleClass('menu-show');
    
    });	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});


});