// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* PART A0: Start your story! */
			msg =
				'its been a horrible day,your in debt and a mafia group u owe money to,is following you!\n\n\t' +
				'1: plead for forgiveness"\n\t' +
				'2: fight back against all odds\n\t' +
				'3: continue running away';
			options = [1, 2, 3];
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg =
				'they say you have 2 weeks to pay up.\n\t' +
				'4: debate with them to get a longer deadline\n\t' +
				'5: accept the deadline and work hard to pay off';
			options = [4, 5];
		} else if (choice == 5) {
			msg = '';
		} else if (choice == 4) {
			msg =
				'after much debating, they decide to give you 3 more days added to your deadline.\n\t' +
				'6: you find a job and start to make money to pay off.\n\t' +
				'7: you somehow ditch them against all odds lol.\n\t' +
				'8: you duel the boss of the group.';
			options = [6, 7, 8];
		} else if (choice == 8) {
			msg =
				'HOORAY! you somehow defeated the leader, and became the leader!\n\t' +
				'9: lead the group and follow the old leaders footsteps.\n\t' +
				'10: make the group a friendlier place and make them be nice.\n\t' +
				'11: disband the group and then leave it.';
			options = [9, 10, 11];
		} else if (choice == 10) {
			msg = 'congrats you have won the GOOD GUY ENDING.\n\t' + '0: try again\n\t?' + '13: end game i guess';
			options = [0, 13];
		} else if (choice == 12) {
			//
		}
		// prompt the player to make choices
		let userInput = await prompt(msg);

		if (options.includes(userInput)) {
			choice = userInput;
		} else {
			await alert('incorrect choice, try again!');
		}

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
