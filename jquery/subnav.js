jQuery(function() {
    var $div = $('#subnav_reveal');
    var height = $div.height();


    $('.subnav_btn').click(function () {
        if ($div.is(':visible')) {
            $div.animate({ height: 0 }, { duration: 500, complete: function () {
                $div.hide();
            } });
        } else {
            $div.show().animate({ height : height }, { duration: 500 });
        }
        
        return false;
    });
});


jQuery(function() {
    var $div = $('#subnav');
    var height = $div.height();
    $div.hide().css({ height : 0 });


    $('.subnav_btn').click(function () {
        if ($div.is(':visible')) {
            $div.animate({ height: 0 }, { duration: 500, complete: function () {
                $div.hide();
            } });
        } else {
            $div.show().animate({ height : height }, { duration: 500 });
        }
        
        return false;
    });
});


jQuery(function() {
	$('#welcome')
	.cycle({
		fx: 'fade',
		speed: 800,
		timeout: 7000,
		pause: 1
	});
}); 


jQuery(function() {
	$('#intro')
	.cycle({
		fx: 'fade',
		speed: 800,
		timeout: 8000,
		pause: 1
	});
}); 


jQuery(function() {
	$('#hours')
	.cycle({
		fx: 'fade',
		speed: 800,
		timeout: 6000,
		pause: 1
	});
}); 


jQuery(function() {
	$('#location')
	.cycle({
		fx: 'fade',
		speed: 800,
		timeout: 8000,
		pause: 1
	});
}); 

