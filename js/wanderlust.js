(function($) {
    
    $(document).ready(function(){
    //$(this).scrollTop(0);
			$('.carousel').carousel({
  			interval: 5000
			});
			$('#loader').addClass('loaded');
    });  
    
    "use strict";

/*		$('#mobile-carousel').on('slide.bs.carousel', function (ev) {
			var id = ev.relatedTarget.id;
			switch (id) {
				case "item1":
					// do something the id is 1
					$('#night-content').fadeOut("slow");
					$('#day-content').fadeIn(1000);
					break;
				case "item2":
					// do something the id is 2
					$('#day-content').fadeOut("slow");
					$('#night-content').fadeIn(1000);
					break;
				default:
					//the id is none of the above
			}
		})*/
	
    //Zoom on hover
    $('.hover')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
			$(this).children('.title').children('.dash').css({'background-color':'#FF00FF'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
			$(this).children('.title').children('.dash').css({'background-color':'#00FFFF'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
				// set up a background image for each tile based on data-image attribute
				.children('.photo').css({
					'background-image': 'url('+ $(this).attr('data-image') +')',
					'background-size': 'cover',
					'background-position': 'center',
					'height': 100 +'%'
				});
    });
	
		$('#contact')
		.on('mouseover', function(){
			$('#tree-top').css({'animation': 'wiggle 5s linear infinite'});
		})
		.on('mouseout', function(){
			$('#tree-top').css({'animation': 'none'});
		});
	
})(jQuery);
