jQuery(document).ready(function($) {
	var total = $('#gallery img').length;
	var current = 1;
	TweenMax.to($('.meta'), .1, {css:{autoAlpha:0, right:'65%'} });

  

	 $("#gallery").slidesjs({

    
        width: 610, height: 427,

          pagination: {
          active: false,
          effect: "slide"
       },

       callback: {
          loaded: function(number) {
            // Do something awesome!
            // Passes start slide number
            	update(number);
          },
          start: function(number) {
            // Do something awesome!
            // Passes slide number at start of animation
            TweenMax.to($('.meta'), .5, {css:{autoAlpha:0, right:'65%'} });
          },
          complete: function(number) {
            // Do something awesome!
            // Passes slide number at end of animation
          		update(number);
          }
    	}

      });

$('.slidesjs-next').html('<i class="fa fa-chevron-circle-right"></i>');
$('.slidesjs-previous').html('<i class="fa fa-chevron-circle-left"></i>');

	 function update(number){

            $('#status').html( number + '/' + total);
            var cap = $('#gallery img').eq(number -1).data('caption');
            $('#caption').html(cap);

            TweenMax.to($('.meta'), .75, {css:{autoAlpha:1, right:'0'}, ease:Elastic.easeInOut });
	 }
});