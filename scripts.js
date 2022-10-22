var divLeft;
var pictureLeft;
var divRight;
var pictureRight;
var flagLeft = true;
var flagRight = true;

function initialization(Left, picLeft, Right, picRight) {
	divLeft = document.getElementById(Left);
	pictureLeft = document.getElementById(picLeft);
	divRight = document.getElementById(Right);
	pictureRight = document.getElementById(picRight);
}

function openLeft() {
	pictureLeft.style.display = "block";
	divLeft.style.width = "99%";
	flagLeft = true;
	if (flagRight) {
		pictureRight.style.display = "none";
		divRight.style.width = "1%";
		flagRight = false;
	}
}

function openBoth() {
	pictureLeft.style.display = "block";
	divLeft.style.width = "50%";
	flagLeft = true;
	pictureRight.style.display = "block";
	divRight.style.width = "50%";
	flagRight = true;
}

function openRight() {
	pictureRight.style.display = "block";
	divRight.style.width = "99%";
	flagRight = true;
	if (flagLeft) {
		pictureLeft.style.display = "none";
		divLeft.style.width = "1%";
		flagLeft = false;
	}
}