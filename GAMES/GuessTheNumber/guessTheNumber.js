(async () => {
	// your code goes here!
	let response = 'y';
	while (response == 'y') {
		let num = Math.random() * 100;
		num = Math.ceil(num);

		let guess;

		while (guess != num) {
			guess = await prompt('guess a number 1-100');

			if (guess == num) {
				await alert('correct!');
			} else if (guess > num) {
				await alert('your guess is too high!');
			} else if (guess < num) {
				await alert('your guess is too low!');
			}
		}

		response = await prompt('wanna go again? y/n');
	}
	exit(); // exits the game
})(); // end wrapper
