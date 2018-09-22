// Global Variables
//  ============================================
// Arrays and Variables for initiating Data
var $startGame = $('#startGame');
var $start = $('.start');

var $timeRemain = $('#timeRemain');
var $question = $('#question');

var $gameDecision = $('.gameDecision');
var $gameChoices = $('#gameChoice');
var $choices = $('.choices');

var $choice1 = $('#choice1');
var $choice2 = $('#choice2');
var $choice3 = $('#choice3');
var $choice4 = $('#choice4');

var $totalScore = $('#totalScore');
var $theScore = ('#theScore');
var $score = $('#score');

var $finalScore = $('#finalScore');

var questions = [
    "What is the name of the movie about a young warrior looking for a cure, a lady and her proud clan of humans, a young girl and her relationships with the animals of the forest?",
    "What is the name of this animated film about a young girl's own 'mailing company' in a new town, a journey to become a witch, and a chatty cat?",
    "Name this Miyazaki masterpiece about a story of a seaside kingdom and another story a thousand years after a great war. A courageous princess and the 'Ohmu' are the main characters.",
    "What movie is about a story of a mining apprentice, a legendary castle, air pirates, secret agents, and a luminous crystal?",
    "What Miyazaki movie is about a story of a girl and her parents, a bathhouse, a transforming boy, and an incredible world of spirits?",
    "What is the title of an animated film about a story of a new home in the country-side, a forest spirit, and a cat/bus?",
    "What is the title of this animated film about a story of nocturnal animals with the power to transform and a clash between the natural world and modern civilization?",
    "Which Miyazaki animated film is about a girl who works in a hat shop, a mysterious wizard, and a moving castle?",
    "What is the name of the movie that is about a mysterious cat that brings a schoolgirl and a determined boy together by fate, and a character named The Baron?",
    "This film is based on a long-running comic strip about a middle aged business man and his family. Touching and humorous, what is the name of this film?"
];

var answers = [
    ["The Cat Returns", "Nausicaa of the Valley of the Wind", "Princess Mononoke", "My Neighbor Totoro"], 
    ["Pom Poko", "The Cat Returns", "Kiki's Delivery Service", "My Neighbors, The Yamadas"], 
    ["Nausicaa of the Valley of the Wind", "Spirited Away", "Howl's Moving Castle", "Castle In The Sky"],
    ["Princess Mononoke", "Howl's Moving Castle", "Castle In The Sky", "Kiki's Delivery Service"],
    ["My Neighbors", "The Yamadas", "Spirited Away", "Porco Rosso", "Whisper of the Heart"],
    ["My Neighbors the Yamadas", "Whisper of the Heart", "The Cat Returns", "My Neighbor Totoro"],
    ["Pom Poko", "Spirited Away", "Princess Mononoke", "Porco Rosso"],
    ["Castle In The Sky", "Kiki's Delivery Service", "The Cat Returns", "Howl's Moving Castle"],
    ["My Neighbor Totoro", "Whisper of the Heart", "Spirited Away", "Nausicaa of the Valley of the Wind"],
    ["Steamboy", "My Neighbor Totoro", "My Neighbors The Yamadas", "Whisper of the Heart"]
];

// var correctAnswer = [2, 2, 0, 2, 2, 3, 0, 3, 1, 2];
var correctAnswer = ["Princess Mononoke","Kiki's Delivery Service","Nausicaa of the Valley of the Wind", "Castle In The Sky", "Spirited Away", "My Neighbor Totoro", "Pom Poko", "Howl's Moving Castle", "Whisper of the Heart", "My Neighbors The Yamadas"];


// Counters
var score = 0;
var questionCount = 0;

$start = $startGame;

// Functions
//  ============================================
$(document).ready(function (){
    
    function init() {
        // debugger;
        $question.hide();
        $choices.hide();
        $totalScore.hide();
    }
    
    function startGame() {        
        $totalScore.show();
        $score.text(score);
        if ($startGame == $start) {
            $startGame.hide();
            QA();
        }
    }

    function QA() {
        // debugger;
        $question.text(questions[questionCount]);
        $question.show();
        $choices.show();
        $choice1.text(answers[questionCount][0]);
        $choice2.text(answers[questionCount][1]);
        $choice3.text(answers[questionCount][2]);
        $choice4.text(answers[questionCount][3]);
    }

    function check(solr) {
        debugger;
        questionCount++

        var answerNum = $(solr)[0].text;
        // for (var i = 0; i < correctAnswer.length; i++) {
            if (correctAnswer.indexOf(answerNum) != 1) {
                score++;
            }
        // }

        console.log(answerNum);

        $score.text(score);
        if (questionCount < 10) {
            QA();
            $(solr).focusout();
        } else {
            setTimeout(function() {
                $finalScore.text("You scored: " + score + " out of 10");
            },  500);
            // newGame()
        }
    }

    function newGame() {
        $startGame.show();
        $startGame.text('New Game')
        
        score = 0;
        questionCount = 0;

        setTimeout(function() {
            $finalScore.html('');
        }, 3000);
        // startGame();
    };

    // Testing / Debugging
    // console.log(answerNum);
    
    // Main Process
    //  ============================================
    init()

});