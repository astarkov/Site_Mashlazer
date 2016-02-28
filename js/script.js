$(document).ready(function(){
	
			/*touch-menu*/
			var touch = $('.touch-menu');
		    var menu = $('.secondary-nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		        // menu.fadeToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 880 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
 	////////////*add class click touchMenu*////////////
		    var touchMenu = $('.touch-menu');
		    	touchMenu.click(function(){
					touchMenu.toggleClass("close-menu");
					});

	});

