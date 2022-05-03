const { Options } = require('java2js');

// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	let primarywepon = 'FISTS';
	let ammo = 0;

	let filePath = QuintOS.dir + '/amongus.txt';
	let data = await fetch(filePath);
	let amongus = await data.text();

	text(amongus, 4);

	let filePath2 = QuintOS.dir + '/babymongus.txt';
	let susmeter = await fetch(filePath2);
	let babymongus = await susmeter.text();

	text(babymongus, 13, 30);

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
		} else if (choice == 3) {
			msg = 'You later get caught. Now your in debt!';
		} else if (choice == 2) {
			msg = 'You CANT DO THAT. YOU HAVE NO WEPON';
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg =
				'they say you have 2 weeks to pay up.\n\t' +
				'4: debate with them to get a longer deadline\n\t' +
				'5: accept the deadline and work hard to pay off';
			options = [4, 5];
		} else if (choice == 5) {
			msg = 'horray.. not really anyways enjoy the AMONGUSAMONGUSAMONGUSAMONGUSAMONGUSAMONGUS';
		} else if (choice == 4) {
			msg =
				'after much debating, they decide to give you 3 more days added to your deadline.\n\t' +
				'6: you find a job and start to make money to pay off.\n\t' +
				'7: you try to ditch them against all odds!\n\t' +
				'8: you try to join the mafia group to defeat them from the inside\n\t' +
				'9: you duel the boss of the group.\n\t' +
				'10: You sneak near conviniently placed gun next to u.\n\t' +
				'???: amongus';
			options = [6, 7, 8, 9, 10, '???'];
		} else if (choice == 6) {
			msg =
				"You just sqweese in the extra money before the deadline and payed off! Good job you got the 'worker ending'!";
		} else if (choice == 7) {
			msg = 'You double ankled them all and somehow ditched them! good job u got the runner ending!';
		} else if (choice == 8) {
			msg =
				'You joined the mafia but only to defeat it from the inside. You also aquire 17 bullets for your revolver. yayayayayay\n\t' +
				'hmmmmmmm maybe you could convince them to give you a gun..\n\n\t' +
				'11: ask the mafia for a gun\n\t' +
				'12: ask the mafia for a job';
			options = [11, 12];
			ammo = 17;
		} else if (choice == 9) {
			msg = "You failed! You're not powerful enough to face the leader yet...";
		} else if (choice == 10) {
			msg =
				'you successfully aquired the    G U N... but no ammo so ur probelly dead. Maybe they have alot of AMMO in thier mafia.';
			primarywepon = 'GUN';
		} else if (choice == '???') {
			msg = 'YOU jUsT GoT RiCkRoLlEd hah';
		} else if (choice == 11) {
			msg = "There's no way they're giving you a gun if you ask like that! GAME over!";
		} else if (choice == 12) {
			msg =
				"They won't give you a job till you prove you can handle it. They give you a gun and tell you to rob the house next door with the karen.\n\n\t" +
				'13: no Way!\n\t' +
				"14: Say you'll do it.\n\t" +
				'15: hah you rickrolled em SOOO MUCH THEY DIE DIE OF CRINGE.';
			options = [13, 14, 15];
		} else if (choice == 13) {
			msg = 'the mafia killed ya cause you said no';
		} else if (choice == 14) {
			options = [16, 13];
			msg =
				'You got the gun but the mafia leader already left.\n\n\t' +
				"16: complete the job, you've got no choice\n\n\t" +
				"13: no way, you won't do it";
		} else if (choice == 16) {
			msg =
				"you go to the house but nothing is there and no one is home. The house is for sale. The mafia guys are so dumb they didn't know that.\n\n\t" +
				'17: go to the mafia headquarters';
			options = [17];
		} else if (choice == 17) {
			msg =
				"You get to the headquarters, and it's super dark out but you notice the mafia leader's car is there.\n\n\t" +
				'18:Tell the mafia guys you want to challenge the leader to a duel';
			options = [18];
		} else if (choice == 18) {
			msg = "The mafia guys say you're nuts and ask if you're joking.\n\n\t" + '19: say yes\n\n\t' + '20: say no!';
			options = [19, 20];
		} else if (choice == 19) {
			msg =
				"They laugh and ask if you'd like to see the boss after completing your first job.\n\n\t" +
				"21: say that actually you didn't complete it!\n\nt" +
				'22: say yes';
			options = [21, 22];
		} else if (choice == 20) {
			msg = 'All the mafia guys pull out their guns and kill you! that was dumb...';
		} else if (choice == 22) {
			msg =
				'you get to the bosses room but they try to take your gun first\n\n\t' +
				'23: let them take it\n\t' +
				"24: say that it doesn't have any bullets\n\t" +
				'20: try to shoot them';
			options = [23, 24, 20];
		} else if (choice == 23) {
			msg = "When the boss finds out you didn't complete";
		} else if (choice == 24) {
			msg =
				"they beleived you! That was lucky. You go into the boss' room. HOORAY! you somehow defeated the leader, and became the leader!\n\t" +
				'25: you keep the mafia group going\n\t' +
				'26: disband the group!';
			options = [25, 26];
		} else if (choice == 25) {
			msg =
				'its feels as if you have changed mentally and phisically.\n\t nothing has changed... GOOD JOB U GOT THE replacement ENDING!!!!!!';
		} else if (choice == 26) {
			msg = 'congrats you have won the GOOD GUY ENDING.';
		}
		if (options.length == 0) {
			msg += '\n\t0: Play again!';
			options = [0];
		}
		// prompt the player to make choices
		let userInput = await prompt(msg, 1, 35, 40);

		if (options.includes(userInput)) {
			choice = userInput;
		} else {
			await alert('incorrect choice, try again!', 1, 35, 40);
		}

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
