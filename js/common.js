$(document).ready(function() {

	function wResize(){
		$(".bottom").css("width", $(window).width())
	};
	$(window).resize(function(){
		wResize()
	});

	$(window).scroll(function(){
		if ($(document).scrollTop() > $('.contacts').height () + 10)
			$('#top').addClass('fixed');
		else
			$('#top').removeClass('fixed')
	});


	$(document).ready(function(){
		var touch = $('.touch-menu');
	  var menu = $('.nav');
	 
	  $(touch).on('click', function(e) {
	      e.preventDefault();
	      menu.slideToggle();
	  });
	  $(window).resize(function(){
	      var wid = $(window).width();
	      if(wid > 760 && menu.is(':hidden')) {
	          menu.removeAttr('style');
	      }
	  });
	});

	$("a[href*=#]").on("click", function(e){
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 777);
	    e.preventDefault();
	    return false;
  	});
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});