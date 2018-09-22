var answers = [["Sprite", "Minute Maid", "Dr. Pepper", "Fanta"], ["Scoville Scale", "Pepper Scale", "Spiciness Scale", "Zesty Scale"], ["Thailand", "Vietnam", "Mongolia", "Malaysia"], ["Red Licorice", "Sour Candy", "Candy Canes", "Red Chocolate Sticks"], ["Salt", "Whiffler", "Umami", "Alginate"], ["Taiwan", "China", "Britain", "United States"], ["Cheese", "Jam", "Butter", "Marmalade"], ["Korea", "Japan", "Argentina", "Kazakhstan"], ["Samgyeopsal", "Bingsu", "Bulgogi", "Kimchi"], ["Alcohol", "Milk", "Smoothies", "Soft Drinks"]];
var listOfCorrectAnswers = ["Dr. Pepper", "Scoville Scale", "Vietnam", "Red Licorice", "Umami", "United States", "Butter", "Argentina", "Kimchi", "Alcohol"];
var listOfQuestions = ["1. Mr Pibb was a soft drink made by the Coca-Cola company to rival what drink?", "2. What is the name of the scale used to measure the spiciness of peppers?", "3. Pho is a popular noodle soup from what country?", "4. Red Vines is a popular brand of what kind of candy?", "5. The taste that allows us to taste savoury food is called…", "6. The paperboard “Chinese Takeout” was invented in what country?", "7. Margarine is sold as a replacement of what?", "8. Chimichurri is a green sauce originated in what country?", "9. What is a traditional fermented Korean side dish made of seasoned vegetables and salt?", "10. A teetotaler is a person that never drinks what?"];


var numQuestions = document.getElementsByClassName("Questions");
var numAnswers = document.getElementsByClassName("Answers");
var submitButton = document.getElementById("submitanswers");
var questionElement = document.getElementById("Question");
var questionCount = 0;
var score = 0;

function startButton() {
	//show the score
	document.getElementById("score").innerHTML = score;
	var startClass = document.getElementById("startbutton").className;
	if (startClass == "start") {
		//hide other things
		document.getElementById("thinker").style.width = "0px";
      document.getElementById("thinker").style.height = "0px";
	   document.getElementById("startbutton").style.visibility = "hidden";
		//show scores
	   document.getElementById("preScore").style.visibility = "visible";
	   document.getElementById("theScore").style.visibility = "visible";
		// show questions and answers
		showQuestionsAndAnswers();
	}
}
function showQuestionsAndAnswers() {
	questionElement.innerHTML = listOfQuestions[questionCount];
	document.getElementById("Question").style.visibility = "visible";
	document.getElementById("1").innerHTML = answers[questionCount][0];
	document.getElementById("2").innerHTML = answers[questionCount][1];
	document.getElementById("3").innerHTML = answers[questionCount][2];
	document.getElementById("4").innerHTML = answers[questionCount][3];
	for(var i =0; i<numAnswers.length; i++) {
		numAnswers[i].style.visibility = "visible";
	}
}

function checkAnswer(number) {
    debugger;
	questionCount++;
		// for(var i =0; i<numAnswers.length; i++) {
		// 		numAnswers[i].style.visibility = "false";
		// 	}
        var answer = document.getElementById(number).innerHTML;

        

		if (listOfCorrectAnswers.indexOf(answer) != -1) {
			score ++;
		}
		document.getElementById("score").innerHTML = score;
	if (questionCount<10) {
		showQuestionsAndAnswers();
		document.getElementById(number).blur();
	} else {
		setTimeout(function() {
			alert("You have reached the end of the quiz. You scored " + score + " out of 10.");
		}, 10);
	}
}