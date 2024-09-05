


const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["islamabad" ,"Peshawar" , "Karachi" , "Lahore"],
        correctAnswer: 1
    },

   
    {
        question: "What is the current Prisedent of Pakistan?",
        choices: ["Imran khan" ,"Ali Amin Gandapur" , "Shahbaz Shareef" , "Nawaz Shareef"],
        correctAnswer: 3
    }, 

    {
        question: "What is the name of highest mountain in the world?",
        choices: ["K-2" ,"Qoh-hindukash" , "Koh-hamaliya" , "Mount Everest"],
        correctAnswer: 4
    },

    {
        question: "What is the color of our national flag?",
        choices: ["Green & White" ,"Green" , "Blue" , "Red"],
        correctAnswer: 1
    },

    {
        question: "What is national animal of pakistan?",
        choices: ["Lion" ,"Deer" , "Markhor" , "Kangroo"],
        correctAnswer: 3
    },

    {
        question: "Who is the founder of Pakistan?",
        choices: ["Qaid e Azam" ,"Pervaiz Musharaf" , "Liaqaut Ali Khan" , "Allama Iqbal"],
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
        question: "Who is the founder Of Microsoft Company?",
        choices: ["Shahid Anwar" ,"Elon musk" , "Bill Gate" , "Marc Zuccurbarck"],
        correctAnswer: 3
    },


];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choiceButtons = Array.from(document.getElementsByClassName("choice"));
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.dataset.choiceIndex = index;
    });

    nextButton.disabled = true;
}

function checkAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswerIndex = parseInt(selectedChoice.dataset.choiceIndex);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
        selectedChoice.style.backgroundColor = "#28a745";
        score++;
        scoreElement.textContent = score;
    } else {
        selectedChoice.style.backgroundColor = "#dc3545";
    }

    choiceButtons.forEach(button => {
        button.disabled = true;
    });

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        displayEndGame();
    } else {
        loadQuestion();
        resetButtons();
    }
}

function resetButtons() {
    choiceButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "#007BFF";
    });
}

function displayEndGame() {
    questionElement.textContent = `Quiz Over! Your final score is ${score}/${questions.length}.`;
    choiceButtons.forEach(button => button.remove());
    nextButton.textContent = "Play Again";
    nextButton.onclick = () => window.location.reload();
}

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener("click", checkAnswer);
});

nextButton.addEventListener("click", nextQuestion);

// Keyboard interaction
document.addEventListener("keydown", (event) => {
    if (event.key >= 1 && event.key <= 4) {
        const choiceIndex = event.key - 1;
        choiceButtons[choiceIndex].click();
    }
});

// Load the first question
loadQuestion();
