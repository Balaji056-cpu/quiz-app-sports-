const questions = [
    {
      question: "Who scored the maximum amount of centuries in ODI cricket?",
      answers: [
        { text: "sachin tendulkar", correct: false },
        { text: "jack kallis", correct: false },
        { text: "kumar sangakkara", correct: false },
        { text: "virat kholi", correct: true }
      ]
    },
    {
      question: "Who scored more goals in La Liga?",
      answers: [
        { text: "Lionel Messi	", correct: true},
        { text: "Cristiano Ronaldo", correct: false },
        { text: "Karim Benzema", correct: false },
        { text: "Telmo Zarra", correct: false }
      ]
    },
    {
      question: "Which bowler holds the record for the most wickets taken in Test cricket history?",
      answers: [
        { text: "Muttiah Muralitharan (Sri Lanka)", correct: true },
        { text: "Shane Warne (Australia)", correct: false },
        { text: "Glenn McGrath (Australia)", correct: false },
        { text:"James Anderson (England) ", correct: false }

      ]
    },
    {
      question: "Who was the leading wicket-taker in the 2019 World Cup?",
      answers: [
        { text: "Trent Boult", correct: false },
        { text: "Jofra Archer", correct: false },
        { text: "Mitchell Starc", correct: true },
        { text:"Jasprit Bumrah", correct: false }
        
      ]
    },
    {
      question: "In which year was the first FIFA World Cup held?",
      answers: [
        { text: "1904", correct: false },
        { text: "1950", correct: false },
        { text: "1970", correct: false },
        { text:"1930", correct: true }
        
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
