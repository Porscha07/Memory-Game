$(document).ready(function(){
	
// *****************Card Images********************

	var cards = [
	'<img src="images/wonder1.jpeg">',
	'<img src="images/wonder2.jpeg">',
	'<img src="images/wonder3.jpg">',
	'<img src="images/wonder4.jpg">',
	'<img src="images/wonder5.jpg">',
	'<img src="images/wonder6.jpg">',
	'<img src="images/wonder7.jpg">',

	];

	// $('#header-button').css({
	// 	'font-size':'medium',
	// 	'font-weight':'bold',
	// 	'color':'blue',
	// 	'position': 'relative',
	// 	'left': '275px'
		
	// });
		// $('#header-button1').css({
		// 	'font-size':'medium',
		// 	'font-weight':'bold',
		// 	'color':'blue',
		// 	'position': 'relative',
		// 'right': '-800px'
	

	var gridSize = 14;
	var memoryGameHTML = '';
	for(let i = 0; i < gridSize; i++){
			if(i<2){
				card = cards[0];
			}else if(i<4){
				card = cards[1];
			}else if (i<6){
				card = cards[2];
			}else if(i<8){
				card = cards[3];
			}else if (i<10){
				card = cards[4];
			}else if (i<12){
				card = cards[5];
			}else{
				card = cards[6];
			}
			console.log(card);

			memoryGameHTML += '<div class="card col-sm-4">';
				memoryGameHTML +='div class= "card-holder">';
					memoryGameHTML+= `<div class="card-front">${card}</div>`;
					memoryGameHTML += `<div class="card-back"></div>`;
				memoryGameHTML += '</div>';
			memoryGameHTML += '</div>';
	}
	console.log(memoryGameHTML);
	$('.mg-contents').html(memoryGameHTML);

	$('.card-holder').click(function(){
		$(this).toggleClass('flip');
		console.log(.cardholder)
		var cardsUp = $('.flip');
		console.dir(cardsUp[0])
		if (cardsUp.length == 2){
			var card1 = cardsUp[0].children[0].children[0].src;
			var card2 = cardsUp[0].children[0].children[0].src;
			// cardsUpImages = cardsUp.find('.card-fron img');
			if(card1 == card2){
				cardsUp.removeClass('flip');
				cardsUp.addClass('matched');
				var matchedCards = $('matched');
				if(matchedCards.length == gridSize){
					alert(" You are officially SMARTER than 57% of America!!!")
				}
			}else{
				alert("Better look next time, click reset to try again!!")
				setTimeout(() =>{
					cardsUp.removeClass('flip');
				},2000);
			}

		}
	});
});