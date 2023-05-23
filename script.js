document.addEventListener("DOMContentLoaded", function() {
  // Quiz questions and answers
  const quizData = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Technical Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which of the following is a JavaScript framework?",
      choices: ["React", "Python", "Java", "Ruby"],
      correctAnswer: "React"
    },
    {
      question: "What is the correct syntax for a CSS class selector?",
      choices: [".classname", "#classname", "*classname", "$classname"],
      correctAnswer: ".classname"
    },
    // Add more coding-related questions...
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
    startTimer();
  }

  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    question.choices.forEach(function(choice) {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", function() {
        checkAnswer(this.textContent);
      });
      choicesElement.appendChild(li);
    });
  }

  function checkAnswer(answer) {
    const question = quizData[currentQuestion];
    if (answer === question.correctAnswer) {
      score++;
    } else {
      time -= 10;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  function startTimer() {
    timer = setInterval(function() {
      time--;
      timeElement.textContent = time;
      if (time <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    document.getElementById("score-container").style.display = "block";
  }

  saveScoreButton.addEventListener("click", function() {
    const initials = initialsInput.value;
    // Save the initials and score
    // ...
    // Show saved scores
    // ...
  });

  startButton.addEventListener("click", startQuiz);
});
