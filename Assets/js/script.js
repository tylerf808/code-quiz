//Variables to hold the html elements
const display = document.getElementById('question');

//Misc variables
let currentQuestion = 0;

//Array of possible questions
const questions = ['Question 1', 'question 2', 'question 3', 'question 4'];

//Function that generates the next question from the question array
const genQuestion = () => {
    display.innerHTML = questions[currentQuestion];
    genAnswers();
    currentQuestion++;
}

//Function that adds proper answer buttons for the question being displayed
const genAnswers = () => {
    const answer1 = document.createElement('button');
    const answer2 = document.createElement('button');
    const answer3 = document.createElement('button');
    const answer4 = document.createElement('button');
    switch (currentQuestion) {
        case 0:
            answer1.innerHTML = "answer for question 1"
            answer2.innerHTML = "answer for question 1"
            answer3.innerHTML = "answer for question 1"
            answer4.innerHTML = "answer for question 1"
            break;
        case 1:
            answer1.innerHTML = "answer for question 2"
            answer2.innerHTML = "answer for question 2"
            answer3.innerHTML = "answer for question 2"
            answer4.innerHTML = "answer for question 2"
            break;
        case 2:
            answer1.innerHTML = "answer for question 3"
            answer2.innerHTML = "answer for question 3"
            answer3.innerHTML = "answer for question 3"
            answer4.innerHTML = "answer for question 3"
            break;
        default:
            answer1.innerHTML = "answer for question 4"
            answer2.innerHTML = "answer for question 4"
            answer3.innerHTML = "answer for question 4"
            answer4.innerHTML = "answer for question 4"
            break;
    }
    display.append(answer1);
    display.append(answer2);
    display.append(answer3);
    display.append(answer4);
}