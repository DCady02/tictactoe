var board = {
	"box": document.getElementsByTagName("td"),
	"symbol": "",
	"turn": "o"
}

//true = x
//false = o


var blocks = [$("#cell0"), $("#cell1"), $("#cell2"), 
		      $("#cell3"), $("#cell4"), $("#cell5"), 
			  $("#cell6"), $("#cell7"), $("#cell8"),];	


function play () {
	$(board.box).click(function (){
		if (board.symbol === "") {
			if (board.turn === "x") {
				board.symbol = "X";
				turn = false;
				console.log(turn);
				
			} else {
				board.symbol = "O";
				turn = true;
				console.log(turn);
			}
		}
		
	});
}

function render () {
	play();


	if (turn = true) {
			$('#turn').text("It is X's Turn");
		} else {
			$('#turn').text("It is O's Turn");
		}

}

$(document).ready(function() {
	render();	
});