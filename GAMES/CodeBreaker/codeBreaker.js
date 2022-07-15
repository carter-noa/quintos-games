// create an array with every letter in the alphabet
let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let msg;

async function susstart() {
	let response = await prompt(
		'hOi Im tEmMiE ThE TeMmIe, wOuLd yOu LikE tO iMpOrT A FiLe To EnCrYpT yAyAYaYAyaAyaYYA (so u wanna import a file or not?)'
	);

	if (response == 'no') {
		msg = await prompt(
			'What would u like to encode? a word? of course! what else would u be using my valuable data to encode? games?? btw theres a secret code see if u can guess it! youll get a speacil prizeeeeeeeeee.'
		);
	} else {
		let fileName = await prompt('What is the name of the file?');
		let filePath = QuintOS.dir + '/' + fileName + '.txt';
		let data = await fetch(filePath);
		msg = await data.text();
	}
	msg = msg.toUpperCase();

	let keyIsKnown = await prompt('Do you know the Caesar Cipher shift amount?');
	if (keyIsKnown == 'yes') {
		let amount = await prompt('How many letters would u like to shift in cesear ciypher?');
		alert(caesarCipher(amount));
	} else {
		for (let i = 1; i < 26; i++) {
			button(caesarCipher(i).slice(0, 78), i, 1, () => {
				erase();

				text('DECRYPTION KEY: ' + i + '\n\n' + caesarCipher(i));
			});
		}
	}
}

function caesarCipher(shiftAmount) {
	let result = ''; // decoded message
	// go through every character in the message
	for (let i = 0; i < msg.length; i++) {
		character = msg[i];

		let alphaIndex = -1;
		// go letter by letter in the alphabet
		// to find the position of the letter in the alphabet
		for (let j = 0; j < alpha.length; j++) {
			if (character == alpha[j]) {
				alphaIndex = j;
				break;
			}
		}

		if (alphaIndex >= 0) {
			// (index of Z) 25 + (shiftAmount) 1
			let idx = alphaIndex + shiftAmount;
			if (idx > 25) {
				idx = idx - 26;
			}
			// alpha[0] is 'A'
			result += alpha[idx];
		} else {
			result += character;
		}
	}
	return result;
}

susstart();
