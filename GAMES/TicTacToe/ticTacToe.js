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

let turnX = true;

let board = [
	['_', '_', '_'],
	['_', '_', '_'],
	['_', '_', '_']
];

function checkForDraw() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] == '_') {
				return false;
			}
		}
	}
	return true;
}

function checkForWinner(mark) {
	for (let i = 0; i < 3; i++) {
		if (board[i][0] == mark && board[i][1] == mark && board[i][2] == mark) {
			return true;
		}

		if (board[0][i] == mark && board[1][i] == mark && board[2][i] == mark) {
			return true;
		}
	}

	if (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark) {
		return true;
	}
	if (board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
		return true;
	}

	return false;
}
async function startNewGame() {
	let response = await prompt(
		' hey there buddy chum pal buddy chum pal friendly friend friend home slice bread slice dawg! i hate not to be so friendly with u my friendly friend friend but would u like to have another go?',
		1,
		52,
		26
	);
	if (response != 'yes') {
		exit();
		return;
	}

	// clearing the board data
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			board[row][col] = '_';
			text(bigSpace, gridRow + 8 * row, gridCol + 9 * col);
		}
	}
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
			'congrats! u have won this game for some kind of reason! still reading this? well if u continue reading this then there might be a specil prize just waiting for u! nah im kiddin wit ya. anyways hy are u still ready when u could be playing a gud game i know! raid shadow legends. nah im not like that. anyways u just got rickrolled BYE!',
			1,
			52,
			26
		);
		startNewGame();
	} else if (checkForDraw()) {
		await alert(
			'hey there buddy chum pal buddy pal friendly friend friend, i hate to be not so friendly with u my friendly friend friend home slice bread slice dawg amigo bun bun, but u people had a draw so to bad ur gonna have to try all over again, dont want to? well click f11 for free vbucks, not falling for that? well if ur still reading this then u just got amongused!',
			1,
			52,
			26
		);
		startNewGame();
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
