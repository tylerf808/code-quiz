//Variables to hold the html elements
const display = document.getElementById('question');

//Array of possible questions
const questions = ['Question 1', 'question 2', 'question 3', 'question 4'];

//Function that generates a random question from the question array
const genQuestion = () => {
    const randomNum = Math.floor((Math.random() * 4));
    display.innerHTML = questions[randomNum];
    questions.pop(randomNum);
}