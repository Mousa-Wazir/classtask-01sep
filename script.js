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
// Function to check the selected answer and update score
function checkAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswerIndex = parseInt(selectedChoice.dataset.choiceIndex);
    const currentQuestion = questions[currentQuestionIndex];


    // Check if the selected answer is correct (adjusted correctAnswer index)
    if (selectedAnswerIndex === currentQuestion.correctAnswer - 1) {
        selectedChoice.style.backgroundColor = "#28a745"; // Correct answer
        score++;
        scoreElement.textContent = score; // Update score display
    } else {
        selectedChoice.style.backgroundColor = "#dc3545"; // Wrong answer
    }

    // Disable all buttons after an answer is selected
    choiceButtons.forEach(button => {
        button.disabled = true;
    })};

    // Enable the next question button
    nextButton.disabled = false;


// Function to load the next question or display end of quiz
function nextQuestion() {
    currentQuestionIndex++; // Move to the next question

    // Check if quiz is over
    if (currentQuestionIndex >= questions.length) {
        displayEndGame(); // Display final score
    } else {
        loadQuestion(); // Load the next question
        resetButtons(); // Reset buttons for new question
    }
}
// Function to reset buttons to default state for new question
function resetButtons() {
    choiceButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "#007BFF"; // Reset button color
    });
}

// Function to display final score and end the quiz
function displayEndGame() {
    questionElement.textContent = `Quiz Over! Your final score is ${score}/${questions.length}.`; // Show final score
    choiceButtons.forEach(button => button.remove()); // Remove answer buttons
    nextButton.textContent = "Play Again"; // Change next button text
    nextButton.onclick = () => window.location.reload(); // Reload page to restart quiz
}

// Event listeners for each choice button click
choiceButtons.forEach(button => {
    button.addEventListener("click", checkAnswer);
});

// Event listener for the next question button click
nextButton.addEventListener("click", nextQuestion);

// Keyboard interaction for answering using keys 1-4
document.addEventListener("keydown", (event) => {
    if (event.key >= 1 && event.key <= 4) {
        const choiceIndex = event.key - 1;
        choiceButtons[choiceIndex].click(); // Simulate button click based on key press
    }
});

// Initial function to load the first question when the page is loaded
loadQuestion();
    