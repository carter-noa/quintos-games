const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `.slice(1);
// slice removes the first character from the String
// in this case I remove the new line at the beginning
// so the first line of the button will be at the proper
// row value

const imposter = `
 .d88b. 
.8P  Y8.
88 x  88
88    88
 8b  d8 
 'Y88P' `.slice(2);

/* PART A0: change the values of row and col to be random */
// screen size is 80 cols x 30 rows
// target is 8w x 6h
// drawing starts from top left corner
// we want to draw the target within the bounds of the frame
// 30 rows - 6 target height - 1 frame line = 23
// 80 columns - 8 target width - 1 frame line = 71

function makeTarget() {
	let row = Math.ceil(Math.random() * 23);
	let col = Math.ceil(Math.random() * 71);
	button(target, row, col, targetClick);

	for (let i = 0; i < 4; i++) {
		row = Math.ceil(Math.random() * 23);
		col = Math.ceil(Math.random() * 71);
		button(imposter, row, col, imposterClick);
	}
}
async function imposterClick() {
	erase();
	await alert('GAME O V E R');
	exit();
}
function targetClick() {
	erase();
	makeTarget();
}

async function startGame() {
	await alert(
		'hoi! welcome to temmies clicker gaem!\n Be carful of the imposters lurking around!\n They have x right in the middle of em!\n Make sure to click the ones that are good!\n They have nothing inside of them! gud luck!',
		8,
		16
	);
	makeTarget();
}
startGame();

/* PART B: Use recursion to make a new button after clicking a button */

/* PART C: Limit clicks to 20, calculate stats */

/* PART D: Make a background pattern */
