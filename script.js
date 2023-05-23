document.addEventListener("DOMContentLoaded", function() {
  // Quiz questions and answers
  const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Which programming language is most popular for web development?",
      choices: ["JavaScript", "Python", "Java", "Ruby"],
      correctAnswer: "JavaScript"
    },
    // Add more questions...
  ];

  const startButton = document.getElementById("start");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const timeElement = document.getElementById("time");
  const initialsInput = document.getElementById("initials-input");
  const saveScoreButton = document.getElementById("save-score");

  let currentQuestion = 0;
  let score = 0;
  let time = 60;
  let timer;

  function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
