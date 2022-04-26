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

let times = [];
let amountOfImposters = 1;

function makeTargets() {
	makeBackground();
	if (times.length == 10) {
		showScore();
	} else {
		times.push(Date.now());
		log(times);
		let targetRow = Math.ceil(Math.random() * 23);
		let targetCol = Math.ceil(Math.random() * 71);
		button(target, targetRow, targetCol, targetClick);
		console.log(targetRow, targetCol);

		for (let i = 0; i < amountOfImposters; i++) {
			row = Math.ceil(Math.random() * 23);
			col = Math.ceil(Math.random() * 71);
			if (row > targetRow - 6 && row < targetRow + 6 && col > targetCol - 8 && col < targetCol + 8) {
				console.log('imposter button moved');
				i--;
			} else {
				button(imposter, row, col, imposterClick);
			}
		}
		amountOfImposters += 2;
	}
}

async function showScore() {
	let speeds = [];

	for (let i = 0; i < 9; i++) {
		speeds.push(times[i + 1] - times[i]);
	}

	log(speeds);

	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum = sum + speeds[i];
	}
	let avg = Math.round(sum / 9);

	let fastest = speeds[0];
	let slowest = speeds[0];
	for (let i = 1; i < 9; i++) {
		if (fastest > speeds[i]) {
			fastest = speeds[i];
		}
		if (slowest < speeds[i]) {
			slowest = speeds[i];
		}
	}

	await alert(
		'Your avarage speed was: ' +
			avg +
			'ms\nYour fastest speed was: ' +
			fastest +
			'ms' +
			'\nYour slowest speed was: ' +
			slowest +
			'ms'
	);
	exit();
}

async function imposterClick() {
	erase();
	await alert('GAME O V E R');
	exit();
}
function targetClick() {
	erase();
	makeTargets();
}

function makeBackground() {
	let pattern2 = '\\___/==\\___/'.repeat(1000);

	text(pattern2, 1, 1, 78);
}

async function startGame() {
	makeBackground();
	await alert(
		'hoi! welcome to temmies clicker gaem!\n Be carful of the imposters lurking around!\n They have x right in the middle of em!\n Make sure to click the ones that are good!\n They have nothing inside of them! gud luck! You only get 10 chances so better be careful!',
		8,
		16
	);
	makeTargets();
}
startGame();

/* PART B: Use recursion to make a new button after clicking a button */

/* PART C: Limit clicks to 20, calculate stats */

/* PART D: Make a background pattern */
