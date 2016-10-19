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
var counter = 0;
var numRight = 0;
var numWrong = 0;
var year = (new Date).getFullYear();
$(".totalQuestions").text(questions.length);
$(".finalScore h2").hide();
$(".next").hide();
$(".playAgain").hide();
$(".results").hide();
$(".awesomenessLevel").hide();
$(".date").text(year);


//--------------------------------------------------BEGIN populate question

var populateQuestion = function() {
	$("h3").empty().show();
	$(".answers").empty().show();
	$(".rightOrWrong").empty();
	$(".results").show();
	$("h3").text(questions[counter].question);

	for(var i = 0; i < questions[counter].answers.length; i+=1){
	    $(".answers").append("<li>" + questions[counter].answers[i] + "</li>");
	}
	  counter += 1;
}

//--------------------------------------------------END populate question



//-------------------------------------------------BEGIN new game function

var newGame = function(){
	counter = 0;
	numRight = 0;
	numWrong = 0;
	$(".right").empty();
	$(".wrong").empty();
	$(".finalScore h2").hide();
	populateQuestion();
}

//--------------------------------------------------END new game


//--------------------------------------------------BEGIN Awesomeness Level calculate

var howAwesome = function() {
    if(numRight >= 0 && numRight <= 3){
    	$(".awesomenessLevel").html("Awesomeness level: <span>Super</span> <span>flat</span> <span>hair.</span> <span class='tiny'>I can't even.</span>");
    }
    else if (numRight > 3 & numRight <= 7) {
    	$(".awesomenessLevel").html("Awesomeness level:<span>Medium</span> <span>feathered</span> <span>hair.</span> <span>You're kind of awesome.</span>");
    }
    else {
    	$(".awesomenessLevel").html("Awesomeness level: <span>Sky</span><span>Scraper</span> <span>hair!!</span><span>You're too cool.</span>");
    }
    $(".awesomenessLevel").show(200);
}

//--------------------------------------------------BEGIN Awesomeness Level calculate


//____________________________________________________BEGIN event lister to start app

$(".next").on("click", function() {
	populateQuestion();
	$(".rightOrWrong").empty();
	$(this).hide();
});
//____________________________________________________END event lister to start app





//----------------------------------------------------BEGIN event listener to evaluate choice
$("ul").on("click", "li", function() {

    if($(this).index() == questions[counter - 1].correctAnswer){
    	$(".rightOrWrong").prepend("<h2 class='correct'>Correct!</h2>");
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
    $(".finalScore h2").show();
    if(counter < questions.length) {
	    $(".next").show();
    }
    if(counter == questions.length){
    	howAwesome();
    	$(".playAgain").show();
    }
});
//-----------------------------------------------------------END evaluate choice




//-----------------------------------------------------------START quiz
$("#quizStart").on("submit", function(e){
	e.preventDefault();
	$(this).hide();
	newGame();
});
//-----------------------------------------------------------END start quiz




//-----------------------------------------------------------BEGIN playAgain
$(".playAgain").on("click", function(){
	$(this).hide();
	$(".awesomenessLevel").hide();
	newGame();
});

})();