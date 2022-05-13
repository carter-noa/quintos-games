const title = `
TTTTT IIIII   CCC
  T     I    C
  T     I    C
  T     I    C
  T   IIIII   CCC

TTTTT  AAA    CCC
  T   A   A  C
  T   AAAAA  C
  T   A   A  C
  T   A   A   CCC

TTTTT  OOO   EEEE
  T   O   O  E
  T   O   O  EEE
  T   O   O  E
  T    OOO   EEEE`.slice(1);

text(title, 5, 6);

const bigSpace = '        \n'.repeat(7);

const bigO = `
 OOOOOO
OO    OO
OO    OO
OO    OO
OO    OO
OO    OO
 OOOOOO`.slice(1); // slice off the first newline character

const bigX = `
XX    XX
 XX  XX
  XXXX
   XX
  XXXX
 XX  XX
XX    XX`.slice(1);

const gridRow = 3;
const gridCol = 26;

/* PART A: finish the grid of 9x8 spaces */
text('─'.repeat(26), gridRow + 7, gridCol);
text('─'.repeat(26), gridRow + 15, gridCol); // draw another horizontal line

text('│\n'.repeat(23), gridRow, gridCol + 8);
text('│\n'.repeat(23), gridRow, gridCol + 17); // draw another vertical line

/* PART A: Make the buttons in the grid */
// note the intervals! row += 8 and col += 9
/*
button(bigSpace, gridRow, gridCol);
button(bigSpace, gridRow, gridCol + 9);
button(bigSpace, gridRow, gridCol + 18);
button(bigSpace, gridRow + 8, gridCol);
button(bigSpace, gridRow + 8, gridCol + 9);
button(bigSpace, gridRow + 8, gridCol + 18);
button(bigSpace, gridRow + 16, gridCol);
button(bigSpace, gridRow + 16, gridCol + 9);
button(bigSpace, gridRow + 16, gridCol + 18);
*/

let turnX = true;

let board = [
	['_', '_', '_'],
	['_', '_', '_'],
	['_', '_', '_']
];

function checkForWinner(mark) {
	if (board[0][0] == mark && board[0][1] == mark && board[0][2] == mark) {
		return true;
	}
	return false;
}

async function takeTurn(row, col) {
	log(row, col);
	if (board[row][col] != '_') {
		await alert(' Stop BEING SUS (play by the rules!)', 10, 56, 20);
		return;
	}

	let mark;
	if (turnX) {
		text(bigX, gridRow + 8 * row, gridCol + 9 * col);
		mark = 'x';
		board[row][col] = 'x';
	} else {
		text(bigO, gridRow + 8 * row, gridCol + 9 * col);
		mark = 'o';
		board[row][col] = 'o';
	}
	log(board.join('\n'));

	if (checkForWinner(mark)) {
		await alert(
			' congrats! u have won this game for some kind of reason! still reading this? well if u continue reading this then there might be a specil prize just waiting for u! nah im kiddin wit ya. anyways hy are u still ready when u could be playing a gud game i know! raid shadow legends. nah im not like that. anyways u just got rickrolled BYE!',
			1,
			52,
			26
		);
	}

	turnX = !turnX;
}

for (let row = 0; row < 3; row++) {
	for (let col = 0; col < 3; col++) {
		button(bigSpace, gridRow + 8 * row, gridCol + 9 * col, () => {
			takeTurn(row, col);
		});
	}
}
