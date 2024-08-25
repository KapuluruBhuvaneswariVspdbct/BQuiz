const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1
    },
    {
        question: "What is the largest mammal?",
        answers: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
        correct: 1
    },
    {
        question: "What is the boiling point of water?",
        answers: ["90°C", "80°C", "100°C", "120°C"],
        correct: 2
    },
    {
        question: "Which element's chemical symbol is O?",
        answers: ["Oxygen", "Gold", "Osmium", "Hydrogen"],
        correct: 0
    },
    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Iron", "Diamond", "Gold", "Graphite"],
        correct: 1
    },
    {
        question: "Which organ in the human body produces insulin?",
        answers: ["Liver", "Heart", "Pancreas", "Kidney"],
        correct: 2
    },
    {
        question: "What is the chemical formula for water?",
        answers: ["CO2", "O2", "H2O", "NaCl"],
        correct: 2
    }
];

// Randomize question set every time the page is loaded
const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    startTimer();
});

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = shuffledQuestions[currentQuestion];
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;
    question.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.style.backgroundColor = getRandomColor();
        answerButton.onclick = () => checkAnswer(index);
        questionContainer.appendChild(answerButton);
    });
}

function checkAnswer(index) {
    if (index === shuffledQuestions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <div class="score-screen">
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score}/${shuffledQuestions.length}</p>
        </div>
    `;
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    const interval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(interval);
            displayScore();
        }
    }, 1000);
}

// Helper function to get random color for options
function getRandomColor() {
    const colors = ['#FF6347', '#4682B4', '#3CB371', '#FFD700'];
    return colors[Math.floor(Math.random() * colors.length)];
}
