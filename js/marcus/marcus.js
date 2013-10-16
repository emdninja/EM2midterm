jQuery(document).ready(function($) {
	
	var container = $('#marcus');
	var title = $('#marcus .inner .title');
	var bg = $('#marcus .inner .bg');
	var q = $('#marcus .inner .quags');
	var bgColour = '#dbb019';

	$('#marcus').mouseenter(function(event) {
		/* Act on the event */
		console.log("mouse has entered");
		TweenMax.to(container, .25, { css:{ backgroundColor:bgColour } } );
		TweenMax.to(title, .5, {css:{ top:-200 }, ease:Power1.easeInOut } );
		TweenMax.to(bg, 1, {css:{ top:0 }, ease:Power1.easeInOut } );
		TweenMax.to(q, 1, {css:{ top:0 }, ease:Power1.easeInOut, delay:0} );
	});

	$('#marcus').mouseleave(function(event){
		
		console.log("mouse has left");
		TweenMax.to(bg, .5, {css:{ top:-480 }, ease:Power1.easeInOut,

			onComplete: function(){
				TweenMax.to(container, .25, { css:{ backgroundColor:"000" } } );
				TweenMax.to(title, .75, { css:{ top : 0 }, ease:Bounce.easeOut, delay:.25} );

			}
		});

			TweenMax.to(q, .5, {css:{ top:480 }, ease:Power1.easeInOut} );

	});

	$(window).resize(function() {
	// var photo = $('#photo')
		console.log( $(container).width() );
		var w = $(container).width();
		$(title).width(w);
		$(bg).width(w);
		$(q).width(w);

		$(container).css( { 'min-height': w } );
	});

});