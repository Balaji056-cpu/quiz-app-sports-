const questions = [
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Central Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Coded Style System", correct: false },
        { text: "Creative Style Syntax", correct: false }
      ]
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      answers: [
        { text: "<br>", correct: true },
        { text: "<break>", correct: false },
        { text: "<lb>", correct: false },
        { text: "<newline>", correct: false }
      ]
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result");
  const finalScore = document.getElementById("final-score");
  
  function loadQuestion() {
    feedbackEl.textContent = '';
    nextBtn.style.display = "none";
    const currentQuestion = questions[currentIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
  
    currentQuestion.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;
      btn.addEventListener("click", () => checkAnswer(btn, answer.correct));
      answersEl.appendChild(btn);
    });
  }
  
  function checkAnswer(button, isCorrect) {
    Array.from(answersEl.children).forEach(btn => btn.disabled = true);
  
    if (isCorrect) {
      button.classList.add("correct");
      feedbackEl.textContent = "✅ Correct!";
      score++;
    } else {
      button.classList.add("wrong");
      feedbackEl.textContent = "❌ Wrong!";
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionEl.textContent = '';
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
    resultBox.classList.remove("hidden");
    finalScore.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  loadQuestion();
