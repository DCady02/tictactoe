$(document).ready(function() {

//Constants
	var game = true;
	var x = 'X';
	var o = 'O';
	var blank = '';

//Variables

	var turn = x;
	var board = [blank, blank, blank
				 blank, blank, blank,
				 blank, blank, blank];

 //Write function

 	function write() {

 		$('td').click(function() {
 			//Making sure that the block that was clicked can only be clicked once
 			var id = $(event.target).attr('id');
 			var digit = parseInt(id.slice(-1));
 			//check to see of the block has been clicked on
 			if (board[digit] = blank) {
 				board[digit] = turn;
 				$(board[digit]).html(toUppercase(turn));
 				if (turn = x) {
 					turn = o;
 				} else if (turn = o) {
 					turn = x;
 				}

 			} else {
 				alert("That box has already been clicked on!")
 			}

 		}); 

 	}

});