//Variables to hold the html elements
const display = document.getElementById('question');
const answers = document.getElementById('answers');
const start = document.getElementById('start');
const result = document.getElementById('result');
const timer = document.getElementById('timer');
const timeContainer = document.getElementById('time-container')
const highscoresLink = document.getElementById('highscores-link')
const scoreboard = document.getElementById('scoreboard')
const scores = document.getElementById('scores')

const submit = document.getElementById('inputInitials')
var timeLeft = 80;

function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.innerHTML = timeLeft;
            timeLeft--;
        } else {
            timer.innerHTML = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

document.addEventListener('click', (event) => {
    const answer = event.target
    if (answer.getAttribute('id') == 'correct') {
        result.innerHTML = 'Correct!'
        if (currentQuestion < 4)
            currentQuestion++;
        genQuestion();
    } else if (answer.getAttribute('id') == 'wrong') {
        result.innerHTML = 'Wrong!'
        if (currentQuestion < 4)
            currentQuestion++;
        genQuestion();
    }
})

//Misc variables
let currentQuestion = 0;

//Array of possible questions
const questions = ['What does HTML stand for?', 'Who invented javascript?', 'What does CSS stand for?', 'When does UNIX time start?'];

//Function that generates the next question from the question array
const genQuestion = async () => {
    if (currentQuestion == 0) {
        countdown()
    }
    if (currentQuestion < 4) {
        display.innerHTML = questions[currentQuestion];
        genAnswers();
    } else {
        await inputScore()
    }
}

//Function to bring up prompt for initials
const inputScore = () => {
    $("#gameboard").remove();
    $('#highscores-link').remove();
    $('#time-container').remove()
    submit.removeAttribute('hidden');
}

const submitScore = () => {
    const input = document.getElementById('initials')
    const score = timeLeft;
    const initials = input.value + " - " + score;
    const newScore = document.createElement('li');
    newScore.innerHTML = initials;
    scores.appendChild(newScore);
    endScreen()
}

//Function to generate end screen
const endScreen = () => {;
    $("#inputInitials").remove()
    scoreboard.removeAttribute('hidden')
}

//Function that adds proper answer buttons for the question being displayed
const genAnswers = () => {
    const answer1 = document.createElement('button');
    const answer2 = document.createElement('button');
    const answer3 = document.createElement('button');
    const answer4 = document.createElement('button');
    const answerArray = [answer1, answer2, answer3, answer4];
    switch (currentQuestion) {
        case 0:
            answer1.innerHTML = "Hyper Text Meme Language"
            answer1.setAttribute('id', 'wrong')
            answer2.innerHTML = "High Tech Master Language"
            answer2.setAttribute('id', 'wrong')
            answer3.innerHTML = "Hyper Text Markup Language"
            answer3.setAttribute('id', 'correct')
            answer4.innerHTML = "Hyper text Making Language"
            answer4.setAttribute('id', 'wrong')
            break;
        case 1:
            answer1.innerHTML = "Donald Trump"
            answer1.setAttribute('id', 'wrong')
            answer2.innerHTML = "Joe Biden"
            answer2.setAttribute('id', 'wrong')
            answer3.innerHTML = "Steve Jobs"
            answer3.setAttribute('id', 'wrong')
            answer4.innerHTML = "Brendan Eich"
            answer4.setAttribute('id', 'correct')
            break;
        case 2:
            answer1.innerHTML = "Cascading Style Sheet"
            answer1.setAttribute('id', 'correct')
            answer2.innerHTML = "Cascading Super Style"
            answer2.setAttribute('id', 'wrong')
            answer3.innerHTML = "Cool Style Sheet"
            answer3.setAttribute('id', 'wrong')
            answer4.innerHTML = "Cascading Sheet Styling"
            answer4.setAttribute('id', 'wrong')
            break;
        default:
            answer1.innerHTML = "Jan 1, 1997"
            answer1.setAttribute('id', 'wrong')
            answer2.innerHTML = "Jan 1, 1970"
            answer2.setAttribute('id', 'correct')
            answer3.innerHTML = "Dec 30, 1970"
            answer3.setAttribute('id', 'wrong')
            answer4.innerHTML = "Jan 1, 2000"
            answer4.setAttribute('id', 'wrong')
            break;
    }
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
    answerArray.forEach(button => {
        button.setAttribute('class', 'btn btn-primary m-2')
    });

    answers.appendChild(answer1);
    answers.appendChild(answer2);
    answers.appendChild(answer3);
    answers.appendChild(answer4);
}

