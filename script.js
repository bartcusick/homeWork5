
invisableBtn();
//
var startBtn = document.querySelector("#start");
var cardfooter = document.querySelector("#cardfooter");
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
var countDown = document.querySelector("#timeNumber");
var countDown = document.querySelector("#initialForm");
var countDown = document.querySelector("#submitInitials");
localStorage.getItem("count");
var submit = document.querySelector("#Submit")
var count = 60;
//
var questionNumber = 0;
var questionPage = "";
var answer = 0;
//
function initialForm() {
    localStorage.setItem("initials");
    console.log("intermnal storage = " + imitials)
}
//
function start() {
    timer();
    disableBtn();
    questionPage1();
}
//
function answer1() {
    wrong();
}
//
function answer2() {
    if (questionPage === 2) {
        disableBtn();
        correct();
        setTimeout(function () { questionPage3(); }, 2000);
    }
    else {
        wrong();
    }

}
//
function answer3() {
    if (questionPage === 1) {
        disableBtn();
        correct();
        questionPage = 0;
        // setTimeout(function () { questionPage2(); }, 2000);
        questionPage2();
    }
    else if (questionPage === 2) {
        disableBtn();
        correct();
        questionPage = 0;
        // setTimeout(function () { questionPage3(); }, 2000);
        questionPage3();
    }
    else if (questionPage === 4) {
        disableBtn();
        correct();
        questionPage = 0;
        // setTimeout(function () { questionPage5(); }, 2000);
        questionPage5();
    }
    else {
        wrong();
    }
}
//
function answer4() {
    if (questionPage === 3) {
        disableBtn();
        correct();
        questionPage = 0;
        // setTimeout(function () { questionPage4(); }, 2000);
        questionPage4();
    }
    else if (questionPage === 5) {
        removeBtn();
        disableBtn();
        stopInterval();
        correct();
        questionPage = 0;
        // setTimeout(function () { resultsPage(); }, 2000);
        resultsPage();
    }
    else {
        wrong();
    }
}
//
function correct() {
    //questionPage = 0;
    document.getElementById("answerResult").innerHTML = "Correct!";
    var correct = document.getElementById("correct");
    function playAudio() {
        correct.play();
    }
}
function wrong() {
    document.getElementById("answerResult").innerHTML = "Wrong!";
    setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    count = count - 10;
    var wrong = document.getElementById("correct");
    function playAudio() {
        wrong.play();
    }
}

//Timer functions
var stopInterval = function () {
    document.getElementById("timeText").innerHTML = 'time is up!';
    clearInterval(countDown);
}

var timer = function () {
    document.getElementById("timeText").innerHTML = "Timer: ";
    var countDown = setInterval(function () {
        // <h2 id="timeText">Timer: <text id="timeNumber">0</text>
        document.getElementById("timeText").innerHTML = "Timer: " + count;
        count--;
        if (count === 0) {
            stopInterval();
        }
    }, 1000);

    var stopInterval = function () {
        document.getElementById("timeText").innerHTML = 'time is up!';
        clearInterval(countDown);
    }
}

startBtn.addEventListener("click", start);
answer1Btn.addEventListener("click", answer1);
answer2Btn.addEventListener("click", answer2);
answer3Btn.addEventListener("click", answer3);
answer4Btn.addEventListener("click", answer4);

//make buttons Invisable
function invisableBtn() {
    document.getElementById("answer1").style.visibility = "none";
    document.getElementById("answer2").style.visibility = "none";
    document.getElementById("answer3").style.visibility = "none";
    document.getElementById("answer4").style.visibility = "none";
}
// invisableBtn();
//make buttons Visable
function visableBtn() {
    document.getElementById("start").style.display = "none";
    document.getElementById("answer1").style.visibility = "initial";
    document.getElementById("answer2").style.visibility = "initial";
    document.getElementById("answer3").style.visibility = "initial";
    document.getElementById("answer4").style.visibility = "initial";
}
function disableBtn() {
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}
function enableBtn() {
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
}
function removeBtn() {
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
}
//Start Page
function startPage() {
    document.getElementById("timeText").innerHTML = "";
    document.getElementById("question1").innerHTML = "";
    document.getElementById("questions").innerHTML = "Try to answer the folowing code-related questions within the time limit. Keep in mind that incorrect answers will penalize your" + "<br>" + "score / time by ten seconds!";
    document.getElementById("start").style.visibility = "initial";

}
startPage();
var answer = "";
//first question page
function questionPage1() {
    //
    questionPage = 1;
    enableBtn();
    document.getElementById("answerResult").innerHTML = "";
    document.getElementById("question1").innerHTML = "Question 1";
    document.getElementById("questions").innerHTML = "Commonly used data types DO NOT INCLUDE:";
    document.getElementById("answer1").innerHTML = "strings";
    document.getElementById("answer2").innerHTML = "booleans";
    document.getElementById("answer3").innerHTML = "alerts";
    document.getElementById("answer4").innerHTML = "numbers";
    answer = "3"
    visableBtn();
}
function questionPage2() {
    questionPage = 2;
    setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    //document.getElementById("answerResult").innerHTML = "";
    document.getElementById("question1").innerHTML = "Question 2";
    document.getElementById("questions").innerHTML = "The condition in an if/else statement is enclosed within ____.";
    document.getElementById("answer1").innerHTML = "quotes";
    document.getElementById("answer2").innerHTML = "curley brackets";
    document.getElementById("answer3").innerHTML = "parentheses";
    document.getElementById("answer4").innerHTML = "square brackets";
    answer = "answer3"
    enableBtn();
}
function questionPage3() {
    questionPage = 3;
    setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    //document.getElementById("answerResult").innerHTML = "";
    document.getElementById("question1").innerHTML = "Question 3";
    document.getElementById("questions").innerHTML = "Arrays in JavaScript can be ussed to store _____.";
    document.getElementById("answer1").innerHTML = "numbers and strings";
    document.getElementById("answer2").innerHTML = "other arrays";
    document.getElementById("answer3").innerHTML = "booleans";
    document.getElementById("answer4").innerHTML = "all of the above";
    answer = "answer4"
    enableBtn();
}
function questionPage4() {
    questionPage = 4;
    setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    //document.getElementById("answerResult").innerHTML = "";
    document.getElementById("question1").innerHTML = "Question 4";
    document.getElementById("questions").innerHTML = "Strings values must be enclosed within ____ when being assigned to variables";
    document.getElementById("answer1").innerHTML = "commas";
    document.getElementById("answer2").innerHTML = "curly brackets";
    document.getElementById("answer3").innerHTML = "quotes";
    document.getElementById("answer4").innerHTML = "parentheses";
    answer = "answer3"
    enableBtn();
}
function questionPage5() {
    questionPage = 5;
    setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    //document.getElementById("answerResult").innerHTML = "";
    document.getElementById("question1").innerHTML = "Question 5";
    document.getElementById("questions").innerHTML = "A very useful tool used durung development and debugging for printing content to the debugger is:";
    document.getElementById("answer1").innerHTML = "JavaScript";
    document.getElementById("answer2").innerHTML = "terminal/bash";
    document.getElementById("answer3").innerHTML = "for loops";
    document.getElementById("answer4").innerHTML = "console log";
    answer = "answer4"
    enableBtn();
}
//
function resultsPage() {
    //setTimeout(function () { document.getElementById("answerResult").innerHTML = ""; }, 1000);
    //removeBtn();
    document.getElementById("timeText").style.display = "none";
    document.getElementById("answerResult").innerHTML = "";
    stopInterval();
    document.getElementById("cardFooter").style.visibility = "none";
    document.getElementById("question1").innerHTML = "All Done!";
    document.getElementById("questions").innerHTML = "Your final score is " + count;
    document.getElementById("initialForm").style.visibility = "initial";
    document.getElementById("initialForm").style.visibility = "initial";
    localStorage.setItem("count");
}
// function resultsPage() {

//         var initials = document.createElement("FORM");
//         initials.setAttribute("id", "initials");
//         document.body.appendChild(x);
    
// }
//timer();