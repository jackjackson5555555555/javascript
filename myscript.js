function addition() {
	var ourAnswer = document.getElementById("answer").value;
	isNaN(ourAnswer);
	if (isNaN(ourAnswer)){
		document.getElementById("output").innerHTML = "Hey! " +  ourAnswer + " is not a number!";
	} else if (ourAnswer == correctAnswer){
		document.getElementById("output").innerHTML = "Correct! " + num1 + " + " + num2 + " = " + correctAnswer;
	} else {
		document.getElementById("output").innerHTML = "WRONG!!! " + num1 + " + " + num2 + " does NOT "  + " = " + ourAnswer;
	}
}