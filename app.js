(function() {

var TestProto = {
	questions: "What's the time?",
	gameScore: function() {
		//something here
	}
}

var quiz = [
	{
		"question": "What was Tommy’s girlfriend’s name?",
		"answers": [
			"Holly", "Gina", "Tina", "Selena"
		],
		"correctAnswer": "Gina"
	},
	{
		"question": "Where did Tommy work?",
		"answers": [
			"The Docks", "The Diner", "The Union Hall", "McDowell's"
		],
		"correctAnswer": "The Docks"	
	},
	{
		"question": "What did Tommy’s girlfriend say didn’t make a difference?",
		"answers": [
			"If he made it or not", "If we make it or not", "If they stayed cold or hot", "If they both smoked the pot"

		],
		"correctAnswer": "If we make it or not"	
	},
	{
		"question": "How far were they?",
		"answers": [
			"At the beginning", "At the end", "Halfway there", "At home, sleeping off last night’s party"

		],
		"correctAnswer": "Halfway there"	
	},
	{
		"question": "What was it that Tommy’s girlfriend dreamed of?",
		"answers": [
			"Going to see Guns n Roses", "Getting a big fat raise", "Having a bunch of Tommy’s babies", "Running away"
		],
		"correctAnswer": "Running away"	
	},
	{
		"question": "Why was Tommy down on his luck?",
		"answers": [
			"His girl didn’t make much money", "His band was total crap", "The Union was on strike", "Praying didn’t seem to help much"
		],
		"correctAnswer": "The Union was on strike"	
	},
	{
		"question": "What kind of hair did Tommy have?",
		"answers": [
			"Buttrock hair", "Super-Teased Aqua-net", "Frosted and feathered", "Any and all of the above"

		],
		"correctAnswer": "Any and all of the above"	
	},
	{
		"question": "Did his girl wear tons of makeup and cheap perfume?",
		"answers": [
			"Most likely", "Hell no", "What does it matter", "No, just lots of eyeliner and dark red lipstick"

		],
		"correctAnswer": "What does it matter"	
	},
	{
		"question": "Was it tough?",
		"answers": [
			"So tough", "There wasn't enough", "It was more rough than anything", "No"
		],
		"correctAnswer": "So tough"	
	},
	{
		"question": "The first time you saw the video, did you imagine Tommy looked like JBJ?",
		"answers": [
			"JBJ IS Tommy!", "What?  No!", "What? Yes!", "I thought that long-haired person in the video was Gina."
		],
		"correctAnswer": "JBJ IS Tommy!"	
	}, 

];

var test = Object.create(TestProto);

test.questions = quiz;


//------------------------functions

var startQuiz = $("form#quizStart");
var showQuestions = $(".questions");
var showFeedback = $(".rightOrWrong");
var choice = $(".answers input[type=radio][name=answer]");
var showCorrectAnswer = $(".wrongAnswer");
var next = $(".next");

startQuiz.on("submit", function(e){
	e.preventDefault();
	$(this).hide();
	showQuestions.show();
});

	choice.change(function() {
	    next.show();
	    if (this.value == 'On the Docks') {
	        showFeedback.prepend("<h2>Correct!</h2>");
	    }
	    else {
	        showFeedback.prepend("<h2>WRONG!</h2>");
	        showCorrectAnswer.show();
	    }
	    choice.prop("disabled", true);
	});

})();