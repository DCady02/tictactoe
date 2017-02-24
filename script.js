$(document).ready(function() {

//Constants
	var game = true;
	var X = 'X';
	var O = 'O';
	var blank = '';

//Variables

	var turn = O;
	var board = [blank, blank, blank,
				 blank, blank, blank,
				 blank, blank, blank];

 	function main() {

 		$('td').click(function(event) {
 			//Making sure that the block that was clicked can only be clicked once
 			var id = $(event.target).attr('id');
 			var digit = parseInt(id.slice(-1));
 			//check to see of the block has been clicked on
 			if (board[digit] === blank) {
 				board[digit] = turn;
 				$(board[digit]).html(turn.toUpperCase());
 				$(event.target).html(turn);
 				if (turn === X) {
 					turn = O;
 				} else if (turn === O) {
 					turn = X;
 				}

 			} else {
 				alert("That box has already been clicked on!")
 			}

 			$(event.target).html(turn);

 		}); 

 	}

 	function win (side) {
 		alert(side + " " + "Wins!");
 		location.reload();
 	}

 	function check () {
 		$('td').click(function() {

 			if (board[0] === X && board[1] === X && board[2] === X) {
 				win("O");
 			} else if (board[3] === X && board[4] === X && board[5] === X)  {
 				win("O");
 			} else if (board[6] === X && board [7] === X && board[8] === X) {
 				win("O")
 			} else if (board[0] === X && board[3] === X && board[6] === X)  {
 				win("O");
 			} else if (board[1] === X && board[4] === X && board[7] === X)  {
 				win("O");
 			} else if (board[2] === X && board[5] === X && board[8] === X)  {
 				win("O");
 			} else if (board[2] === X && board[4] === X && board[6] === X)  {
 				win("O");
 			} else if (board[0] === X && board[4] === X && board[8] === X)  {
 				win("O");
 			}

 			if (board[0] === O && board[1] === O && board[2] === O) {
 				win("X");
 			} else if (board[3] === O && board[4] === O && board[5] === O)  {
 				win("X");
 			} else if (board[6] === O && board [7] === O && board[8] === O) {
 				win("X");
 			} else if (board[0] === O && board[3] === O && board[6] === O)  {
 				win("X");
 			} else if (board[1] === O && board[4] === O && board[7] === O)  {
 				win("X");
 			} else if (board[2] === O && board[5] === O && board[8] === O)  {
 				win("X");
 			} else if (board[2] === O && board[4] === O && board[6] === O)  {
 				win("X");
 			} else if (board[0] === O && board[4] === O && board[8] === O)  {
 				win("X");
 			}

 		});
 	}

 	main();
 	check();
});