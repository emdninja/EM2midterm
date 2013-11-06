jQuery(document).ready(function($) {
 	var container= $("#jasmine");
	var title = $("#jasmine .inner .title");
	var bg = $("#jasmine .inner .bg");
	var art = $("#jasmine .inner .art");
	var bgColour = "#dbb019";

	resize();

	$('#jasmine').mouseenter(function(event) {
		console.log("mouse has entered");
		TweenMax.to(container, .25);
		TweenMax.to(title, .5, {css:{top:-200 }, ease:Power1.easeInOut});
		TweenMax.to(bg, .2, {css:{top:0 }, ease:Power1.easeInOut});
		TweenMax.to(art, .2, {css:{top:0 }, ease:Power1.easeInOut, delay:.5});
	});	

	$('#jasmine').mouseleave(function(event) {
		console.log("mouse has left");
		TweenMax.to(title, .75, {css:{top:0 }, ease:Bounce.easeInOut,delay:.25,

			onComplete:function(){
				TweenMax.to(container, .25);
				TweenMax.to(bg, .25, {css:{top:-480 }, ease:Power1.easeInOut});
			}
		});

		TweenMax.to(art, .5, {css:{top:480 }, ease:Power1.easeInOut});
});

$(window).resize(function(){	
	resize();
});

function resize(){
	var w = $(container).width();
	$(title).width(w);
	$(bg).width(w);
	$(art).width(w);

	$(container).css({'min-height':w});
}
});
