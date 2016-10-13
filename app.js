(function() {

var questions = [
	{
		"question": "What was Tommy’s girlfriend’s name?",
		"answers": [
			"Holly", "Gina", "Tina", "Selena"
		],
		"correctAnswer": 1
	},
	{
		"question": "Where did Tommy work?",
		"answers": [
			"The Docks", "The Diner", "The Union Hall", "McDowell's"
		],
		"correctAnswer": 0	
	},
	{
		"question": "What did Tommy’s girlfriend say didn’t make a difference?",
		"answers": [
			"If he made it or not", "If we make it or not", "If they stayed cold or hot", "If they both smoked the pot"

		],
		"correctAnswer": 1	
	},
	{
		"question": "How far were they?",
		"answers": [
			"At the beginning", "At the end", "Halfway there", "At home, sleeping off last night’s party"

		],
		"correctAnswer": 2	
	},
	{
		"question": "What was it that Tommy’s girlfriend dreamed of?",
		"answers": [
			"Going to see Guns n Roses", "Getting a big fat raise", "Having a bunch of Tommy’s babies", "Running away"
		],
		"correctAnswer": 3
	},
	{
		"question": "Why was Tommy down on his luck?",
		"answers": [
			"His girl didn’t make much money", "His band was total crap", "The Union was on strike", "Praying didn’t seem to help much"
		],
		"correctAnswer": 2	
	},
	{
		"question": "What kind of hair did Tommy have?",
		"answers": [
			"Buttrock hair", "Super-Teased Aqua-net", "Frosted and feathered", "Any and all of the above"

		],
		"correctAnswer": 3
	},
	{
		"question": "Did his girl wear tons of makeup and cheap perfume?",
		"answers": [
			"Most likely", "Hell no", "What does it matter", "No, just lots of eyeliner and dark red lipstick"

		],
		"correctAnswer": 2	
	},
	{
		"question": "Was it tough?",
		"answers": [
			"So tough", "There wasn't enough", "It was more rough than anything", "No"
		],
		"correctAnswer": 0
	},
	{
		"question": "The first time you saw the video, did you imagine Tommy looked like JBJ?",
		"answers": [
			"JBJ IS Tommy!", "What?  No!", "What? Yes!", "I thought that long-haired person in the video was Gina."
		],
		"correctAnswer": 0	
	}, 

];


//------------------------Setting things up

var startQuiz = $("form#quizStart");
var showQuestions = $(".questions");
var showCorrectAnswer = $(".wrongAnswer");
var questionNumber = $(".questionNumber");
var next = $(".next");
var counter = 0;
var numRight = 0;
var numWrong = 0;
$(".totalQuestions").text(questions.length);
$(".finalScore .right").text(counter);
$(".playAgain").hide();
next.hide();



//-------------------------------------------------BEGIN new game function
var newGame = function(){
	$("h3").text(questions[0].question);

	for(var i = 0; i < questions[0].answers.length; i+=1){
	        $(".answers").append("<li>" + questions[0].answers[i] + "</li>");
	}
	counter += 1;

	showQuestions.show();
	$(".status p").show();
	$(".tagline").hide();
	$(".playAgain").hide();
	questionNumber.text(counter);
}
//--------------------------------------------------END new game



//____________________________________________________BEGIN event lister to start app
next.on("click", function() {
	$("h3").empty();
	$(".answers").empty().show();
	$(".rightOrWrong h2").empty();
	$(".rightOrWrong p").empty();
	$("h3").text(questions[counter].question);
	$(this).hide();

	for(var i = 0; i < questions[counter - 1].answers.length; i+=1){
	        $(".answers").append("<li>" + questions[counter].answers[i] + "</li>");
	}
	  counter += 1;
	  questionNumber.text(counter);
});
//____________________________________________________END event lister to start app





//----------------------------------------------------BEGIN event listener to evaluate choice
$("ul").on("click", "li", function() {

	if($(this).index() == questions[counter - 1].correctAnswer){
    	$(".rightOrWrong").prepend("<h2>Correct!</h2>");
    	numRight += 1;
    	$(".right").text(numRight);
    }
    else {
    	var nums = questions[counter - 1].correctAnswer;
    	$(".rightOrWrong").prepend("<h2>Wrong!!</h2> <p>The correct answer is '" + questions[counter-1].answers[nums] + "'.</p>");
    	numWrong += 1;
    	$(".wrong").text(numWrong);
	}
    $(".answers").hide();
    if(counter < 10) {
		next.show();
    }
    else{
    	$(".status p").hide();
    	$(".playAgain").show();
    }

    if(numRight >0 && numRight <= 3){
    	$(".awesomenessLevel").text("Super-flat hair!");
    }
    else if (numRight > 3 & numRight <= 7) {
    	$(".awesomenessLevel").text("Medium feathered hair!");
    }
    else {
    	$(".awesomenessLevel").text("Skyscraper");
    }

})
//-----------------------------------------------------------END evaluate choice




//-----------------------------------------------------------START quiz
startQuiz.on("submit", function(e){
	e.preventDefault();
	newGame();
	$(this).hide();
});
//-----------------------------------------------------------END start quiz




//-----------------------------------------------------------BEGIN playAgain
$(".playAgain").on("click", function(){
	numRight = 0;
	numWrong = 0;
	counter = 0;
	$(".rightOrWrong h2").empty();
	$(".rightOrWrong p").empty();
	$(".answers").empty().show();
	$(".right").text(numRight);
	$(".wrong").text(numWrong);
	$(".questionNumber").text(counter);
	newGame();
	$(this).hide();
});

})();