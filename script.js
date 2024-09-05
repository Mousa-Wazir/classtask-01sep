// Array of quiz questions with choices and correct answer index
const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Islamabad", "Peshawar", "Karachi", "Lahore"],
        correctAnswer: 1
    },
    {
        question: "Who is the current President of Pakistan?",
        choices: ["Imran Khan", "Ali Amin Gandapur", "Shahbaz Shareef", "Nawaz Shareef"],
        correctAnswer: 3
    },
    {
        question: "What is the name of the highest mountain in the world?",
        choices: ["K-2", "Qoh-hindukash", "Koh-hamaliya", "Mount Everest"],
        correctAnswer: 4
    },
    {
        question: "What is the color of our national flag?",
        choices: ["Green & White", "Green", "Blue", "Red"],
        correctAnswer: 1
    },
    {
        question: "What is the national animal of Pakistan?",
        choices: ["Lion", "Deer", "Markhor", "Kangaroo"],
        correctAnswer: 3
    },
    {
        question: "Who is the founder of Pakistan?",
        choices: ["Qaid e Azam", "Pervaiz Musharraf", "Liaquat Ali Khan", "Allama Iqbal"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "Who is the founder of Microsoft Company?",
        choices: ["Shahid Anwar", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        correctAnswer: 3
    }
];

// Initializing current question index and score variables
let currentQuestionIndex = 0;
let score = 0;
// Getting HTML elements to display questions and choices
const questionElement = document.getElementById("question");
const choiceButtons = Array.from(document.getElementsByClassName("choice"));
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-question");

// Function to load and display a question on the screen
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Display choices for the current question
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.dataset.choiceIndex = index;
    });

    // Disable the next button until an answer is selected
    nextButton.disabled = true;
}


