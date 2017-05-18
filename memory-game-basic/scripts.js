var cards = [
	'<img src="http://www.relatably.com/m/img/iron-man-meme-generator/mc-iron-man-meme-generator-stop-i-am-iron-man-ce3373.jpg">',
	'<img src="image2.png">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 4;

	var card = '<img src="http://www.relatably.com/m/img/iron-man-meme-generator/mc-iron-man-meme-generator-stop-i-am-iron-man-ce3373.jpg">';

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = cards[0];
		}else{card = cards[1];
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);

});