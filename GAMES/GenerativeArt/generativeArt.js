let time = 0;

function draw() {
	background('b');
	translate(width / 2, height / 2);
	stroke('w');
	strokeWeight(1);

	for (let i = 0; i < 100; i++) {
		if ((time - i) % 2 == 0) continue;
		line(eqX1(time - i), eqY1(time - i), eqX2(time - i), eqY2(time - i));
	}

	time++;
}

function eqX1(t) {
	return sin(t * 2) * mouseX;
}

function eqY1(t) {
	return cos(t / 2) * mouseY;
}

function eqX2(t) {
	return sin(t / 2) * 90;
}

function eqY2(t) {
	return cos(t * 4) * 70;
}

/*
let time = 0;

function draw() {
	translate(width / 2, height / 2);
	circle(eqX(time), eqY(time), 2);
	time++;
}

function eqX(t) {
	return sin(t * 2) * 50 + sin(t / 20) * 50;
}

function eqY(t) {
	return cos(t / 2) * 70;
}
*/
